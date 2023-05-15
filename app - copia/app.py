import io

from flask import Flask, render_template, request, make_response
import json
import docxtpl
import mysql.connector

app = Flask(__name__)

# Configuración de la base de datos
database_config = {
    'host': 'contabo.audidatservices.com',
    'port': 3306,
    'user': 'agustin',
    'password': 'calf0rni4',
    'database': 'ppalacios'
}

def conectar_bd():
    conexion = mysql.connector.connect(**database_config)
    return conexion

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
    
    # print("Llega aquí")

    conexion = conectar_bd()
    cursor = conexion.cursor()

    # print("Se supone que conecta correctamente")

    for pregunta, respuesta in respuestas.items():
        consulta = "INSERT INTO respuestas (pregunta, respuesta) VALUES (%s, %s)"
        valores = (pregunta, respuesta)
        cursor.execute(consulta, valores)

    conexion.commit()
    cursor.close()
    conexion.close()

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
