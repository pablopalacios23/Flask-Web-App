const json = {
    "title": "Cuestionario audidat",
    "description": "Práctica 1",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "nombre",
        "title": "Nombre",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "apellidos",
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
      "title": "Marco organizativo",
      "description": "Política de seguridad"
     },
    //  {
    //   "name": "page2",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q2A",
    //     "title": "¿Ha aprobado la entidad una Normativa de seguridad?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q2B",
    //     "title": "¿Ha sido difundida la Normativa de seguridad?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q2C",
    //     "title": "¿Ha realizado un inventario de activos de información?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "labelFalse": "No",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q2D",
    //     "title": "¿Ha realizado un inventario de las credenciales de los usuarios de los sistemas de información?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco organizativo",
    //   "description": "Normativa de seguridad"
    //  },
    //  {
    //   "name": "page3",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q3A",
    //     "title": "¿Ha facilitado a los usuarios de los sistemas de información una Política de uso de los propios sistemas de información?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q3B",
    //     "title": "¿Tienen documentado el contexto de la organización, incluyendo la segregación de tareas?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q3C",
    //     "title": "¿Dispone de un proceso de reporte de comportamientos anómalos?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco organizativo",
    //   "description": "Procedimiento de seguridad"
    //  },
    //  {
    //   "name": "page4",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q4A",
    //     "title": "¿Ha aprobado la política de autorizaciones?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q4B",
    //     "title": "¿Tiene la entidad documentada todas las autorizaciones indicadas en la política de autorizaciones?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco organizativo",
    //   "description": "Proceso de autorización"
    //  },
    //  {
    //   "name": "page5",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q5A",
    //     "title": "¿Ha realizado un análisis de riesgos?",
    //     // "defaultValue": "true",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Planificación - Análisis de Riesgos"
    //  },
    //  {
    //   "name": "page6",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q6A",
    //     "title": "¿Ha elaborado un documento del Planteamiento integral de la identidad?",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q6B",
    //     "title": "¿Incluye el Sistema de gestón, relativo a la planificación, organización y control de los recursos relativos a la seguridad de la información?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Arquitectura de seguridad"
    //  },
    //  {
    //   "name": "page7",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q7A",
    //     "title": "¿Cuenta con un protocolo de adquisición de nuevos componentes?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Adquisición de nuevos componentes"
    //  },
    //  {
    //   "name": "page8",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "q8A",
    //     "title": "¿Ha elaborado un estudio previo como el indicado en el documento de Planificación (gestión de la capacidad)?",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q8B",
    //     "title": "¿Utiliza herramientas y recursos para la monitorización de la capacidad?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "isRequired": true,
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Gestión de la capacidad"
    //  },
    //  {
    //   "name": "page9",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Componentes certificados",
    //     "title": "Componentes certificados",
    //     "hideNumber": true,
    //     "isRequired": true,
    //     "choices": [
    //      {
    //       "value": "No Aplica",
    //       "text": "No aplica"
    //      },
    //      " Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q9A",
    //     "visibleIf": "{Componentes certificados} allof [' Aplica']",
    //     "title": "¿Para seleccionar los productos o servicios suministrados por un tercero que formen parte de la arquitectura de seguridad utilizan el Catálogo de Productos y Servicios de Seguridad de las Tecnologías de la Información y Comunicación del Centro Criptológico Nacional?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Componentes certificados} allof [' Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Componentes certificados} allof [' Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q9B",
    //     "visibleIf": "{Componentes certificados} allof [' Aplica']",
    //     "title": "¿Para seleccionar los productos o servicios suministrados por un tercero que formen parte de la arquitectura de seguridad comprueban que tienen alguna certificación que cumpla con los requisitos funcionales de seguridad?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Componentes certificados} allof [' Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Componentes certificados} allof [' Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Componentes certificados"
    //  },
    //  {
    //   "name": "page10",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Control de acceso",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q10A",
    //     "visibleIf": "{Control de acceso} allof ['Aplica']",
    //     "title": "¿Cuenta con sistemas de identificación de usuarios?",
    //     "enableIf": "{Control de acceso} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Control de acceso} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q10B",
    //     "visibleIf": "{Control de acceso} allof ['Aplica']",
    //     "title": "¿Pueden singularizar a la persona asociada a su rol y sus responsabilidades?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Control de acceso} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Control de acceso} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "visibleIf": "Marco operacional",
    //   "title": "Marco operacional",
    //   "description": "Control de acceso"
    //  },
    //  {
    //   "name": "page11",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Requisitos de acceso",
    //     "title": "Requisitos de acceso",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q11A",
    //     "visibleIf": "{Requisitos de acceso} allof ['Aplica']",
    //     "title": "¿Se limita el acceso a los recursos de tratamiento de información y a la información a los usuarios de los sistemas de información?",
    //     "enableIf": "{Requisitos de acceso} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Requisitos de acceso} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q11B",
    //     "visibleIf": "{Requisitos de acceso} allof ['Aplica']",
    //     "title": "¿Han desarrollado una política de uso de redes y servicios?",
    //     "enableIf": "{Requisitos de acceso} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Requisitos de acceso} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Requisitos de acceso"
    //  },
    //  {
    //   "name": "page12",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "q12A",
    //     "title": "¿El sistema de control de acceso segrega funciones y tareas?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "isRequired": true,
    //     "choices": [
    //      "Si",
    //      "No",
    //      "No aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Segregación de funciones y tareas"
    //  },
    //  {
    //   "name": "page13",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Proceso de gestión de derechos de acceso",
    //     "title": "Proceso de gestión de derechos de acceso",
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q13A",
    //     "visibleIf": "{Proceso de gestión de derechos de acceso} allof ['Aplica']",
    //     "title": "¿Cuenta con un proceso de gestión de derechos de acceso?",
    //     "enableIf": "{Proceso de gestión de derechos de acceso} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Proceso de gestión de derechos de acceso} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q13B",
    //     "visibleIf": "{Proceso de gestión de derechos de acceso} allof ['Aplica']",
    //     "title": "¿Cuenta con un Política de acceso en remoto?",
    //     "enableIf": "{Proceso de gestión de derechos de acceso} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Proceso de gestión de derechos de acceso} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Proceso de gestión de derechos de acceso"
    //  },
    //  {
    //   "name": "page14",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Mecanismo de autentificación (usuarios externos)",
    //     "title": "Mecanismo de autentificación (usuarios externos)",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q14A",
    //     "visibleIf": "{Mecanismo de autentificación (usuarios externos)} allof ['Aplica']",
    //     "title": "¿En caso de existir usuarios externos, generan o pueden generar medios de identificación específicos?",
    //     "enableIf": "{Mecanismo de autentificación (usuarios externos)} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mecanismo de autentificación (usuarios externos)} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q14B",
    //     "visibleIf": "{Mecanismo de autentificación (usuarios externos)} allof ['Aplica']",
    //     "title": "¿Quedan registrados los accesos con éxito y los fallidos?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Mecanismo de autentificación (usuarios externos)} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mecanismo de autentificación (usuarios externos)} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Mecanismo de autentificación (usuarios externos)"
    //  },
    //  {
    //   "name": "page15",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Mecanismo de autentificación (usuarios de la organización)",
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q15A",
    //     "visibleIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "title": "¿Otorgan a cada usuario una identidad?",
    //     "enableIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q15B",
    //     "visibleIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "title": "¿Utilizan un doble factor de autentificación en aquellos casos en los que se acceda desde zonas no controladas y/o con acceso remoto?",
    //     "enableIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q15C",
    //     "visibleIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "title": "¿Registran los accesos con éxito y los fallidos?",
    //     "enableIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mecanismo de autentificación (usuarios de la organización)} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Mecanismo de autentificación (usuarios de la organización)"
    //  },
    //  {
    //   "name": "page16",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Explotación",
    //     "title": "Explotación",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q16A",
    //     "visibleIf": "{Explotación} allof ['Aplica']",
    //     "title": "¿Identifican los activos de la organización y definen las responsabilidades de protección adecuadas?",
    //     "enableIf": "{Explotación} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Explotación} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q16B",
    //     "visibleIf": "{Explotación} allof ['Aplica']",
    //     "title": "¿Mantienen un inventario actualizado de todos los elementos del sistema?",
    //     "enableIf": "{Explotación} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Explotación} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Explotación"
    //  },
    //  {
    //   "name": "page17",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "q17A",
    //     "title": "¿Configuran todos los equipos antes de que empiecen a funcionar?",
    //     "isRequired": true,
    //     "choices": [
    //      "Si",
    //      "No",
    //      "No aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Configuración de la seguridad"
    //  },
    //  {
    //   "name": "page18",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Gestión de la configuración de la seguridad",
    //     "title": "Gestión de la configuración de la seguridad",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q18A",
    //     "visibleIf": "{Gestión de la configuración de la seguridad} allof ['Aplica']",
    //     "title": "¿Realiza revisiones de la configuración de los componentes del sistema?",
    //     "enableIf": "{Gestión de la configuración de la seguridad} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Gestión de la configuración de la seguridad} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q18B",
    //     "visibleIf": "{Gestión de la configuración de la seguridad} allof ['Aplica']",
    //     "title": "¿Verifican periódicamente la configuración hardware/software del sistema ?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Gestión de la configuración de la seguridad} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Gestión de la configuración de la seguridad} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Gestión de la configuración de la seguridad"
    //  },
    //  {
    //   "name": "page19",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Mantenimiento y actualizaciones de seguridad",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q19A",
    //     "visibleIf": "{Mantenimiento y actualizaciones de seguridad} allof ['Aplica']",
    //     "title": "¿Mantienen el equipamiento físico y lógico que constituye el sistema de acuerdo con las indicaciones del fabricante?",
    //     "enableIf": "{Mantenimiento y actualizaciones de seguridad} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mantenimiento y actualizaciones de seguridad} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q19B",
    //     "visibleIf": "{Mantenimiento y actualizaciones de seguridad} allof ['Aplica']",
    //     "title": "¿Comprueban que las nuevas versiones del equipamiento funcionan correctamente?",
    //     "enableIf": "{Mantenimiento y actualizaciones de seguridad} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Mantenimiento y actualizaciones de seguridad} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Mantenimiento y actualizaciones de seguridad"
    //  },
    //  {
    //   "name": "page20",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Gestión de cambios",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q20A",
    //     "visibleIf": "{Gestión de cambios} allof ['Aplica']",
    //     "title": "¿Se analiza previamente si los cambios a la seguridad del sistema?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Gestión de cambios} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Gestión de cambios} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q20B",
    //     "visibleIf": "{Gestión de cambios} allof ['Aplica']",
    //     "title": "Una vez que se adopte el cambio, ¿se realizarán pruebas de aceptación?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Gestión de cambios} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Gestión de cambios} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "title": "Marco operacional",
    //   "description": "Gestión de cambios"
    //  },
    //  {
    //   "name": "page21",
    //   "elements": [
    //    {
    //     "type": "checkbox",
    //     "name": "Protección frente a código dañino",
    //     "isRequired": true,
    //     "choices": [
    //      "No aplica",
    //      "Aplica"
    //     ],
    //     "maxSelectedChoices": 1
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q21A",
    //     "visibleIf": "{Protección frente a código dañino} allof ['Aplica']",
    //     "title": "¿Instalan software de protección frente a código dañino en todos los equipos?",
    //     "enableIf": "{Protección frente a código dañino} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Protección frente a código dañino} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    },
    //    {
    //     "type": "boolean",
    //     "name": "q21B",
    //     "visibleIf": "{Protección frente a código dañino} allof ['Aplica']",
    //     "title": "¿Las funciones críticas se analizan al iniciar los sistemas?",
    //     "description": "Esta cuestión deberá ser cumplimentada o incluida en la documentación en caso de encontrarnos ante un Esquema Nacional de Seguridad con un nivel de seguridad MEDIA",
    //     "enableIf": "{Protección frente a código dañino} allof ['Aplica']",
    //     "isRequired": true,
    //     "requiredIf": "{Protección frente a código dañino} allof ['Aplica']",
    //     "labelTrue": "Si",
    //     "valueTrue": "Si",
    //     "valueFalse": "No"
    //    }
    //   ],
    //   "requiredIf": "question1",
    //   "title": "Marco operacional",
    //   "description": "Protección frente a código dañino"
    //  }
    ]
   };