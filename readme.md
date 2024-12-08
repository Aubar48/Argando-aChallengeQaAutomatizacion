<figure><img src="/cypress.png" alt="logo" style="height: 200px;"></figure>

# **Trabajo Final: QA Automation con Cypress**

## **Descripción del Proyecto**
Este proyecto automatiza pruebas para el sitio [SauceDemo](https://www.saucedemo.com), simulando el flujo de compra con diferentes usuarios. Se incluye un [Casos de pruebas](https://docs.google.com/spreadsheets/d/1AHUPmJbamMjzV35YunvaABstV7SwRdkg/edit?usp=sharing&ouid=100517623038913693993&rtpof=true&sd=true), la implementación automatizada en Cypress y el registro de defectos en [Trello](https://trello.com/invite/b/67545f1337b952292f0bb8e3/ATTI24b8807d070ccb58962a561141e86e2e0646633B/swag-labs-qa-automatizacion-challenge),
y este es el reporte de errores [Reporte de bugs](https://docs.google.com/document/d/1FOE358r_KKAoL6Mpg7squfy1zz5_yDVMIa36XfueKCM/edit?usp=sharing),
y se incluye un [Plan de pruebas](https://docs.google.com/document/d/1JoF8YQR1293_XQF20L1UomUMiRa_jytryrOylAHz2Ts/edit?usp=sharing).

## **Tecnologías Utilizadas**
- **Cypress**: Framework de automatización de pruebas.
- **JavaScript**: Lenguaje de programación para la creación de scripts de pruebas.
- **Google Sheets**: Herramienta para la creación de plan de pruebas.
- **Trello**: Plataforma de gestión de proyectos para el registro de defectos.
- **Google Docs**: Herramienta para la creación de reporte de errores.

Dentro de la carpeta reports hay un web html para visualizar, el video del reporte de errores de la automtizacion de la web de sauceDemo, como tambien en screenshots una foto.

1. Generar un plan de pruebas para posteriormente automatizarlo
2. Tener instalado cypress
3. Crear el test “myTestSaucedemo.cy.js”
4. En el siguiente sitio: https://www.saucedemo.com, generar los tests:
4. 1. Compra con user 1
4. 1. 1. Login con el usuario “standard_user”
4. 1. 2. Agregar los productos al carrito
4. 1. 3. Hacer el checkout
4. 1. 4. Validar que se haya realizado el checkout
4. 1. 5. Realizar el logout
4. 2. Compra con user 2
4. 2. 1. Ingresar con el usuario “problem_user”
4. 2. 2. Repetir los puntos 4.1.2, 4.1.3, 4.1.4, 4.1.5

5. Utilizar la herramienta de gestión de incidencias Trello y reportar los
defectos o mejoras detectadas.

6. Formato de entrega: Subir el trabajo a github y adjuntar el link del
repositorio a la entrega

Criterios de Evaluación:
● Aplicar todo lo aprendido
○ Comprensión y aplicación: Se evaluará la comprensión y
correcta aplicación de los conceptos aprendidos durante el curso,
reflejados en el trabajo final.
○ Uso de buenas prácticas: El código debe demostrar
buenas prácticas en automatización de pruebas.

● Uso de Herramientas
○ Flexibilidad en la elección de herramientas: Los estudiantes
pueden utilizar cualquier herramienta adicional que
consideren útil para completar el trabajo, además de Cypress.

● Plan de Pruebas
○ Presencia de un plan de pruebas: Es fundamental contar
con un plan de pruebas bien definido.
○ Claridad y detalle: El plan de pruebas debe ser claro y
detallado, con una descripción precisa de los casos de
prueba.

● Automatización de Pruebas
○ Cumplimiento de los requisitos: Las pruebas automatizadas
deben cumplir con los requisitos especificados en el trabajo
final.
○ Validaciones y Verificaciones: Las pruebas deben incluir
validaciones y verificaciones adecuadas para asegurar
que los resultados sean correctos.

Ejecutar el Proyecto
● Clona este repositorio: git clone https://github.com/Aubar48/Argando-aChallengeQaAutomatizacion
● cd proyecto-qa-automation
● Instala las dependencias: npm install
● Abre Cypress: npx cypress open
● Selecciona el archivo myTestSaucedemo.cy.js y ejecuta las pruebas.
● También puedes ejecutar las pruebas en modo headless: npx cypress run