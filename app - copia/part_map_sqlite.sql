-- DROP TABLE Cuestionario;
-- DROP TABLE Respuestas;


CREATE TABLE IF NOT EXISTS Cuestionario(

    id INTEGER PRIMARY KEY, 
    nombre CHAR(30) NOT NULL,
    apellidos CHAR(30) NOT NULL,
    id_respuestas int  NOT NULL,

    FOREIGN KEY (id_respuestas) REFERENCES Respuestas(id)


);

CREATE TABLE IF NOT EXISTS Respuestas(

    id INTEGER PRIMARY KEY,
    respuestas_json VARCHAR2 (23767)
);
