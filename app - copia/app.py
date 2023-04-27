import os
import json
from flask import Flask, jsonify, render_template, request

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
        with open('respuestas.json', 'w') as f:
            json.dump(respuestas, f)
        return 'Formulario enviado correctamente'

    return render_template('index.html', preguntas=preguntas)

if __name__ == '__main__':
    app.run()



