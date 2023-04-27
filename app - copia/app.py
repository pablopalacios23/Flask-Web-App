import os
import json
from flask import Flask, jsonify, render_template, request

from docx import Document
from docx.shared import Inches
from dotenv import load_dotenv

from dotenv import load_dotenv

load_dotenv('./.flaskenv')

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    preguntas = [
            {"texto": "¿Cuál es tu nombre?", "nombre": "nombre", "respuesta": ""},
            {"texto": "¿Cuál es tu edad?", "nombre": "edad", "respuesta": ""},
            {"texto": "¿Cuál es tu género?", "nombre": "genero", "respuesta": ""}
    ]

    if request.method == 'POST':
        respuestas = {}
        for pregunta in preguntas:
            respuesta = request.form[pregunta['nombre']]
            pregunta['respuesta'] = respuesta
            respuestas[pregunta['texto']] = respuesta

        # Crear el documento Word y agregar las respuestas
        document = Document()
        document.add_heading('Respuestas del cuestionario', 0)
        for pregunta in preguntas:
            document.add_paragraph(f"{pregunta['texto']}: {pregunta['respuesta']}", style='List Bullet')
        document.save('respuestas.docx')

        return 'Formulario enviado correctamente'

    return render_template('index.html', preguntas=preguntas)

if __name__ == '__main__':
    app.run()



