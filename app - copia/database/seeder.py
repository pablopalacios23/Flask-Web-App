import sqlite3 as sql
from flask import request

DB_path = "C:/Users/VORPC/Desktop/app - copia/database/marco_organizativo.db"

def createDB():
    conn = sql.connect(DB_path)
    cursor = conn.cursor()
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
    # respuestas = request.get_json()
    data = [('Pablo', 'Palacios López', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si')]

    cursor.executemany(""" INSERT INTO marco_organizativo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",data)
    conn.commit()
    conn.close()

if __name__ == "__main__":
    createDB()
    addValues()
