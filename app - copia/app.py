import io

from flask import Flask, render_template, request, make_response
import json
import pyodbc
import docxtpl
import sqlite3
from sqlite3 import Error
import ast

app = Flask(__name__)
app.static_folder = 'static'

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



if __name__ == '__main__':
    app.run()
