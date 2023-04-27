import os
import json
from flask import Flask, jsonify, render_template, request

from dotenv import load_dotenv

load_dotenv('./.flaskenv')

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    preguntas = [
        { "id": 1, "texto": "¿Cuál es tu nombre?" },
        { "id": 2, "texto": "¿Cuál es tu edad?" },
        { "id": 3, "texto": "¿Cuál es tu género?" }
    ]

    if request.method == 'POST':
        respuestas = request.form.to_dict()
        with open('respuestas.json', 'w') as f:
            json.dump(respuestas, f)
        return 'Formulario enviado correctamente'

    return render_template('index.html', preguntas=preguntas, name='Pablo')

if __name__ == '__main__':
    app.run()
