import mysql.connector
from mysql.connector import Error

conexion = mysql.connector.connect(
host = "contabo.audidatservices.com",
port=3306,
 user="agustin",
password="calf0rni4",
)

if conexion.is_connected():
    print("Conexión exitosa")
