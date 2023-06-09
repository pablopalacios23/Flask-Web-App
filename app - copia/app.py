import io

from flask import Flask, render_template, request, make_response, flash, redirect, url_for
import json
import pyodbc
import docxtpl
import sqlite3
from sqlite3 import Error
import ast

app = Flask(__name__)
app.static_folder = 'static'
app.secret_key = 'hola'
# app = Flask(__name__, static_url_path='/static')


def createDB():
    print("Starting...")
    cnn = None
    filename = 'C:/Users/VORPC/Desktop/app - copia/database/cuestionarios.db'

    try:
        with open('part_map_sqlite.sql', 'r') as sql_file:
            sql = sql_file.read()
        cnn = sqlite3.connect(filename)
        print('database connected...')
        cs = cnn.cursor()
        cs.executescript(sql)
        cnn.commit()
        print('selecting from new table...')

    except Error as e:
        print(e)

    finally:
        if cnn: 
            cnn.close()
            print('Done')


def addValues(data):

    data = json.loads(data)
    respuestas = {}


    for key, value in data.items():
        if key.startswith('q'):
            respuestas[key] = value
    
    conn = sqlite3.connect('c:/Users/VORPC/Desktop/app - copia/database/cuestionarios.db')

    # Crear un cursor para ejecutar consultas
    cursor = conn.cursor()

    # Insertar en la tabla Respuestas
    cursor.execute("INSERT INTO Respuestas (respuestas_json) VALUES (?)", (json.dumps(respuestas),))
    respuestas_id = cursor.lastrowid

    # Insertar en la tabla Cuestionario
    query = "INSERT INTO Cuestionario (nombre, apellidos, id_respuestas) VALUES (?, ?, ?)"
    values = (data['nombre'], data['apellidos'], respuestas_id)
    cursor.execute(query, values)

    # Confirmar los cambios y cerrar la conexión
    conn.commit()
    conn.close()





@app.route('/')
def hello_world():  # put application's code here
    createDB()
    return render_template("index.html")


@app.route('/cuestionario')
def survey():
    return render_template('cuestionario.html', nombre="Pablo")


@app.route('/guardar_respuestas', methods=['POST'])
def guardar_respuestas():
    respuestas = request.get_json()
    respuestas_json = json.dumps(respuestas, indent=2)
    addValues(str(respuestas_json))
    f = open("respuestas/respuestas.json", "w")
    f.write(respuestas_json)
    f.close()

    return "OK"

@app.route('/list')
def list():
    con = sqlite3.connect('c:/Users/VORPC/Desktop/app - copia/database/cuestionarios.db')
    con.row_factory = sqlite3.Row

    cur = con.cursor()
    cur.execute('SELECT * FROM Cuestionario INNER JOIN Respuestas ON Cuestionario.id_respuestas = Respuestas.id')

    rows = cur.fetchall()
    con.close()

    return render_template("list.html", rows=rows)

    

# @app.route('/generar_docx')
# def generar_docx():
#     ruta = "plantillas_docx/plantilla.docx"
#     doc = docxtpl.DocxTemplate(ruta)
#     respuestas = json.load(open('respuestas/respuestas.json'))
#     doc.render(respuestas)
#     file_stream = io.BytesIO()
#     doc.save(file_stream)
#     file_stream.seek(0)
#     response = make_response(file_stream)
#     response.headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
#     response.headers.set(
#         'Content-Disposition', 'attachment', filename='informe_respuestas.docx')
#     return response



@app.route('/generar_docxFromDatabase/<usuario>')
def generar_docxFromDatabase(usuario):
    respuestas = obtener_respuestas_usuario(usuario)

    if respuestas:
        ruta = "plantillas_docx/plantilla.docx"
        doc = docxtpl.DocxTemplate(ruta)

        # Pasar las respuestas al método render del objeto doc
        doc.render(respuestas)

        # Guardar el documento en memoria
        output = io.BytesIO()
        doc.save(output)
        output.seek(0)

        # Configurar la respuesta HTTP para descargar el documento
        response = make_response(output.getvalue())
        response.headers.set('Content-Disposition', 'attachment', filename='test_usuario_{}.docx'.format(usuario))
        response.headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')

        return response

    return "No se encontraron respuestas para el usuario {}".format(usuario)




def obtener_respuestas_usuario(usuario):
    # Establecer la conexión con la base de datos
    conn = sqlite3.connect('c:/Users/VORPC/Desktop/app - copia/database/cuestionarios.db')
    cursor = conn.cursor()

    # Consultar las respuestas del usuario
    cursor.execute("SELECT Cuestionario.nombre, Cuestionario.apellidos, Respuestas.respuestas_json FROM Cuestionario INNER JOIN Respuestas ON Cuestionario.id_respuestas = Respuestas.id WHERE Respuestas.id = ?", (usuario,))
    resultado = cursor.fetchone()

    # Cerrar la conexión con la base de datos
    cursor.close()
    conn.close()

    # Si se encontraron respuestas para el usuario, retornar el resultado
    if resultado:
        nombre = resultado[0]
        apellidos = resultado[1]
        respuestas_json = resultado[2]
        respuestas_dict = json.loads(respuestas_json)
        respuestas_dict['nombre'] = nombre
        respuestas_dict['apellidos'] = apellidos
        
        return respuestas_dict

    # Si no se encontraron respuestas, retornar None o un valor indicativo según tu lógica de aplicación
    return None


@app.route('/eliminar_usuario/<usuario>')
def eliminar_usuario(usuario):
    conn = sqlite3.connect('c:/Users/VORPC/Desktop/app - copia/database/cuestionarios.db')
    cursor = conn.cursor()

    
    # Eliminar el usuario de la tabla Cuestionario
    cursor.execute("DELETE FROM Cuestionario WHERE id = ?", (usuario,))

    # Eliminar las respuestas asociadas al usuario de la tabla Respuestas
    cursor.execute("DELETE FROM Respuestas WHERE id = ?", (usuario,))

    # Confirmar los cambios y cerrar la conexión con la base de datos
    conn.commit()
    conn.close()
    
    return redirect(url_for('list'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Aquí puedes implementar la lógica de verificación de inicio de sesión,
        # como verificar las credenciales del usuario en una base de datos o sistema de autenticación.

        # Si las credenciales son válidas, puedes redirigir al usuario a una página de inicio de sesión exitoso.
        # Por ejemplo, si tienes una ruta llamada '/dashboard' para el panel de control del usuario:
        return redirect('index')
    else:
        # Si es un GET, simplemente renderiza la plantilla de inicio de sesión.
        return render_template('login.html')
    
    
@app.route('/registrar', methods=['GET', 'POST'])
def registrar():

    error_messages = []
    sucess_messages = []

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        
        # Validar que el usuario y la contraseña cumplan con los requisitos necesarios
        if len(username) < 3:
            flash('El nombre de usuario debe tener al menos 3 caracteres.', 'error')
            return redirect(url_for('registrar_usuario'))

        if len(password) < 6:
            flash('La contraseña debe tener al menos 6 caracteres.', 'error')
            return redirect(url_for('registrar_usuario'))

        if password != confirm_password:
            flash('Las contraseñas no coinciden.', 'error')
            return redirect(url_for('registrar_usuario'))

        # Guardar el usuario en la base de datos o en otro sistema de almacenamiento
        # (Aquí puedes agregar tu lógica específica para guardar el usuario)

        # Redirigir al usuario a una página de inicio de sesión o a otra página de tu elección
        flash('Usuario registrado exitosamente. Por favor, inicia sesión.', 'success')
        return redirect(url_for('login'))
    
    return redirect(url_for('registrar_usuario'))
        

@app.route('/registrar_usuario')
def registrar_usuario():
    return render_template('registrar_usuario.html')

if __name__ == '__main__':
    app.run()
