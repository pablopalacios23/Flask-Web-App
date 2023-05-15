const json = {
    "title": "Marco organizativo",
    "description": "Práctica 1",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "First_name",
        "title": "Nombre",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "Last_name",
        "title": "Apellidos",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "q1A",
        "title": "¿Ha aprobado la entidad una Política de seguridad?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q1B",
        "title": "¿Ha designado los distintos roles incluidos en su Política de seguridad?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       }
      ],
      "title": "Política de seguridad"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "boolean",
        "name": "q2A",
        "title": "¿Ha aprobado la entidad una Normativa de seguridad?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q2B",
        "title": "¿Ha sido difundida la Normativa de seguridad?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q2C",
        "title": "¿Ha realizado un inventario de activos de información?",
        "isRequired": true,
        "labelTrue": "Si",
        "labelFalse": "No",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q2D",
        "title": "¿Ha realizado un inventario de las credenciales de los usuarios de los sistemas de información?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       }
      ],
      "title": "Normativa de seguridad"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "boolean",
        "name": "q3A",
        "title": "¿Ha facilitado a los usuarios de los sistemas de información una Política de uso de los propios sistemas de información?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q3B",
        "title": "¿Tienen documentado el contexto de la organización, incluyendo la segregación de tareas?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q3C",
        "title": "¿Dispone de un proceso de reporte de comportamientos anómalos?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       }
      ],
      "title": "Procedimiento de seguridad"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "boolean",
        "name": "q4A",
        "title": "¿Ha aprobado la política de autorizaciones?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       },
       {
        "type": "boolean",
        "name": "q4B",
        "title": "¿Tiene la entidad documentada todas las autorizaciones indicadas  en la política de autorizaciones?",
        "isRequired": true,
        "labelTrue": "Si",
        "valueTrue": "Si",
        "valueFalse": "No"
       }
      ],
      "title": "Proceso de autorización"
     },
     {
      "name": "page5"
     }
    ]
   };