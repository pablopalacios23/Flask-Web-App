import io

from flask import Flask, render_template, request, make_response
import json
import docxtpl
import mysql.connector
import sqlite3 as sql

app = Flask(__name__)

DB_path = "C:/Users/VORPC/Desktop/app - copia/database/marco_organizativo.db"

def createDB():
    conn = sql.connect(DB_path)
    cursor = conn.cursor()

    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='marco_organizativo'")
    result = cursor.fetchone()

    if result is not None:
        conn.close()
    else:
        cursor.execute("""CREATE TABLE marco_organizativo (
        Nombre text, 
        Apellidos text, 
        q1A text, 
        q1B text, 
        q2A text, 
        q2B text, 
        q2C text, 
        q2D text, 
        q3A text, 
        q3B text, 
        q3C text, 
        q4A text, 
        q4B text
        )""")

        conn.commit()
        conn.close()


def addValues():
    conn = sql.connect(DB_path)
    cursor = conn.cursor()
    respuestas = request.get_json()
    data = [tuple(respuestas.values())]

    cursor.executemany(""" INSERT INTO marco_organizativo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",data)
    conn.commit()
    conn.close()


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
