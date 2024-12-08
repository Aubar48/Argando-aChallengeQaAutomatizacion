Plan de Pruebas: SauceDemo - Login - Flujo de Compra - Logout -
1. Objetivo
Verificar que el flujo de compra en SauceDemo funciona correctamente para diferentes tipos de usuarios y garantizar que las funcionalidades clave operen sin defectos.

2. Alcance
Usuarios a evaluar:

standard_user
problem_user
Funcionalidades bajo prueba:

Login.
Agregar productos al carrito.
Realizar checkout.
Validar el éxito del checkout.
Logout.
3. Casos de Prueba
Caso 1: Compra exitosa con standard_user
Precondiciones:

Tener acceso a la página de SauceDemo (https://www.saucedemo.com).
Contar con credenciales de usuario standard_user.
Acciones:

Realizar login.
Agregar todos los productos al carrito.
Proceder al checkout llenando los datos requeridos.
Validar el mensaje de éxito al finalizar el checkout.
Realizar logout.
Resultado esperado:
El proceso de compra se completa sin errores y se muestra el mensaje: "Thank you for your order!"

Caso 2: Compra con problemas en problem_user
Precondiciones:

Tener acceso a la página de SauceDemo (https://www.saucedemo.com).
Contar con credenciales de usuario problem_user.
Acciones:

Realizar login.
Agregar todos los productos al carrito.
Proceder al checkout llenando los datos requeridos.
Intentar finalizar la compra.
Identificar y documentar cualquier error.
Resultado esperado:
Identificar defectos o errores relacionados con el flujo de compra en este usuario. Registrar los hallazgos en Trello para su seguimiento.

4. Criterios de Éxito
Standard_user:
Todas las pruebas deben ejecutarse sin errores y el flujo de compra debe completarse exitosamente.
Problem_user:
Los errores encontrados deben documentarse detalladamente y registrarse en Trello para corrección.
5. Herramientas Utilizadas
Automatización:

Cypress para la ejecución de los casos de prueba.
Gestión de incidentes:

Trello para registrar y dar seguimiento a los errores encontrados.
6. Responsables
Testers a cargo: [Nahuel Argandoña].
Responsable de la gestión de resultados: [Nahuel Argandoña/líder de pruebas].
7. Riesgos Identificados
Tiempo limitado para ejecutar las pruebas en múltiples navegadores.
Posibles interrupciones en el entorno de pruebas de SauceDemo.
8. Cronograma
Día 1: Configuración del entorno y ejecución inicial de pruebas en standard_user.
Día 2: Pruebas en problem_user y documentación de errores en Trello.
Día 3: Análisis y entrega del reporte final.
9. Documentación Complementaria
Capturas de pantalla: Se almacenarán en cypress/screenshots.
Videos de pruebas: Se almacenarán en cypress/videos.
