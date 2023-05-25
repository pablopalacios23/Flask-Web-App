import io

from flask import Flask, render_template, request, make_response
import json
import pyodbc
import docxtpl
import sqlite3
from sqlite3 import Error

app = Flask(__name__)


def addValues():
    with open('C:/Users/VORPC/Desktop/app - copia/respuestas/respuestas.json') as json_file:
        data = json.load(json_file)

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
        # sql = 'Select * From Cuestionario'
        # cs.execute(sql)
        # recs = cs.fetchall()
        # for rec in recs:
        #     print(rec)

    except Error as e:
        print(e)

    finally:
        if cnn: 
            cnn.close()
            print('Done')


@app.route('/')
def hello_world():  # put application's code here
    return render_template("index.html")


@app.route('/cuestionario')
def survey():
    return render_template('cuestionario.html', nombre="Pablo")


@app.route('/guardar_respuestas', methods=['POST'])
def guardar_respuestas():
    respuestas = request.get_json()
    respuestas_json = json.dumps(respuestas, indent=2)
    f = open("respuestas/respuestas.json", "w")
    f.write(respuestas_json)
    f.close()


    createDB()
    addValues()

    # print(tuple(respuestas.keys()))
    # print(tuple(respuestas.values()))

    return "OK"
    

@app.route('/generar_docx')
def generar_docx():
    ruta = "plantillas_docx/plantilla.docx"
    doc = docxtpl.DocxTemplate(ruta)
    respuestas = json.load(open('respuestas/respuestas.json'))
    doc.render(respuestas)
    file_stream = io.BytesIO()
    doc.save(file_stream)
    file_stream.seek(0)
    response = make_response(file_stream)
    response.headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    response.headers.set(
        'Content-Disposition', 'attachment', filename='informe_respuestas.docx')
    return response


if __name__ == '__main__':
    app.run()
