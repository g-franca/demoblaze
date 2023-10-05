Buenas Tardes,

Adjunto las preguntas y respuestas de la Prueba Teorica y mas al final algunas aclaraciones de la Prueba Tecnica:

-------------------------------------- // ------------------------------------------------

Prueba Teórica

1. ¿Cuál es la diferencia entre garantía de calidad, control de calidad y pruebas?

    R. La garantía de calidad (Quality Assurance) es el área encargada del aseguramiento de la calidad en todo el ciclo de vida del software a través de la definición de procesos y políticas mientras el control de calidad (Quality Control) ejecuta las pruebas en base a lo que define QA. Las pruebas son herramientas creadas por los testers o probadores basados en los requerimientos siguiendo los lineamientos orientados por el área de calidad.

2. Explica la diferencia entre una "prueba funcional" y una "prueba de regresión". Proporciona ejemplos para ilustrar cada uno de estos tipos de pruebas.
	
    R. Las pruebas funcionales se enfocan en verificar que el software cumple con los requerimientos de los usuarios. Se realizan durante la etapa de desarrollo del Software. Las pruebas de Regresión están compuestas por un set/un conjunto de pruebas funcionales. 
Se realizan después de un cambio/deployment en el código y su funcionalidad es asegurar de que el sistema siga funcionando y que no haya errores después de los cambios realizados.

3. Describe cómo se relacionan las metodologías ágiles y las pruebas de software.
¿Cómo afecta la agilidad al proceso de prueba?

    R.  Las metodologías ágiles impulsan las pruebas de software a través de las principales características que hoy implementamos dentro del Scrum, KanBan entre otros.
A diferencia de la metodología de cascada, las metodologías ágiles desglosan los proyectos en múltiples features que se entregan en determinados periodos de tiempo (sprints). Durante esos sprints, el equipo puede entregar mini resultados al cliente y de esta forma, lograr evaluar el crecimiento de su proyecto, al contrario de una metodología de cascada donde largos periodos de tiempo pasan hasta que la primera entrega o un MVP llegue a sus manos para analizarlo.

4. ¿Cuál de las siguientes habilidades es esencial para un QA Automation?
    
R.	
    a. Capacidad de programación avanzada.
    b. Pensamiento crítico y habilidad para identificar escenarios de prueba. (Híbrido)
    d. Competencia en la identificación y priorización de casos de prueba para la
    automatización.
    e. Habilidad para colaborar con desarrolladores y otros miembros del equipo de
    manera efectiva.

5. Proporciona un ejemplo de un defecto de alta prioridad en una aplicación de
comercio electrónico. Describe cómo afectaría a los usuarios y por qué sería
considerado crítico.

    R. Un defecto de altísima prioridad que tengo presente, ocurrió con una empresa de ropa el año 2022. La empresa lanzó un código promocional en su página que permitía a los clientes una compra con 85% de descuento. El testeo del código no fue realizado antes del release a producción, haciendo que miles de personas realizarán la compra con el descuento proporcionado. El resultado final fue:
La empresa tuvo que realizar la cancelación de todas las compras de ese día que fueron realizadas por medio de tarjeta de crédito/débito.
Las compras que fueron realizadas por boleto/efectivo no se pudieron cancelar.
Varios juicios se ejecutaron en contra la empresa por daños y por la no devolución del dinero (teniendo la compra cancelada).

6. En el contexto de una aplicación de banca en línea, describe un resultado esperado
para una función de transferencia de fondos entre cuentas.
	
    R. Asumiendo que las demás features ya han sido testeadas como por ejemplo login y verificación de la cuenta que será utilizada para la transferencia, el principal resultado esperado es:
De que una notificación/alerta/mensaje en pantalla aparezca confirmando de que la realización ha sido realizada con éxito.
Que se corrobore que el dinero ha sido debitado de la cuenta de origen.
Que en la página/sección de “Transferencias” figure la transacción realizada con la correcta fecha, hora, CBU y otros detalles que cumplan los requerimientos pre establecidos.

7. ¿Cuál es uno de los objetivos principales de las pruebas de integración en un equipo
de desarrollo ágil? Selecciona la opción que mejor aplique:

    R.
b. Validar la funcionalidad de una pieza específica del código.

-------------------------------------- // ------------------------------------------------

Prueba Tecnica

Aclaraciones:

1. Para la prueba tecnica se ha utilizado la herramienta Cypress para construir y validar los test cases pedidos.
2. Para que funcione en el ordernador local, debe asegurar de tener descargado la carpeta "node_modules" ya que esta no se comparte en los proyectos.
3. He dejado algunos pequeños comentarios en el codigo que NO son considerados buena practica, pero he trabajado en varios proyectos y todo es muy sujeto a distintas interpretaciones es bueno aclarar con el equipo en un proyecto real.
4. No esta del todo claro el primer item de Test de Categorias ya que el enfoque es automatizacion sobre UI. Me gustaria tener la posibilidad de discutirlo. A su vez que se valoren los demas test cases.

1. Agregar varias categorías:
-Test001 - Should verify that Category List is correctly visible on the main page.

	Business Case: Crear una prueba que verifique la capacidad de agregar diferentes categorías de productos.

	Steps to reproduce:
	- Ingresar a la pagina de inicio/ home.
 	- Analizar la lista de Categorias.

 	Expected Result:
	- Verificar que las categorías pre-establecidas se muestren correctamente en la página.

 	Attached images for support



2. Agregar un Ítem de Cada Categoría:
-Test002 - Add one item from each category to chart

	Business Case: Automatizar el proceso de agregar un ítem de cada categoría al carrito de compras.

	Steps to reproduce:
	- Ingresar a la pagina de inicio/ home.
 	- Seleccionar un producto de la pagina de inicio.
  	- Agregarlo al carrito y regresar a la pagina de inicio.
   	- Agregar un segundo producto al carrito de compras.
   	- Ir a la pagina de monitores desde la seccion de "Categorias".
   	- Agregar un monitor al carrito de compras.
   	- Ingresar a la seccion del carrito de compras.

 	Expected Result:
	- Verificar de que el carrito muestre los ítems correctamente y en la cantidad esperada.

 	Attached images for support

3. Carrito de Compras - Actualización Correcta::
-Test003 - Verify that the cart is updated correctly with the addition of a product

	Business Case: Crear una prueba que valide que el carrito de compras se actualiza correctamente al agregar ítems.

	Steps to reproduce:
	- Ingresar a la pagina de inicio/ home.
 	- Seleccionar un producto de la pagina de inicio.
  	- Agregarlo al carrito y regresar a la pagina de inicio.
   	- Agregar un segundo producto al carrito de compras.
   	- Ingresar a la seccion del carrito de compras.

 	Expected Result:
	- Verificar que los productos hayan sido ingresados correctamente. Sus cantidades y precios.
 	- Verificar que el total del carrito refleje con precisión los cambios realizados. 

 	Attached images for support


-Test004 - Verify that the cart is updated correctly when a product is removed.

	Business Case: Crear una prueba que valide que el carrito de compras se actualiza correctamente al eliminar ítems.

	Steps to reproduce:
	- Ingresar a la pagina de inicio/ home.
 	- Seleccionar un producto de la pagina de inicio.
  	- Agregarlo al carrito y regresar a la pagina de inicio.
   	- Agregar un segundo producto al carrito de compras.
   	- Ingresar a la seccion del carrito de compras.
    	- Eliminar un producto de la lista de compras.

 	Expected Result:
	- Verificar que los productos hayan sido ingresados correctamente. Sus cantidades y precios.
 	-Verificar que el producto haya sido eliminado correctamente.
 	- Verificar que el total del carrito refleje con precisión los cambios realizados. 

 	Attached images for support

4. Flujo de Checkout con Visualización de Número de Tarjeta:
-Test005 - Should Proceed with purchase and verify credit card number

	Business Case: Automatizar el flujo de checkout, incluida la visualización del número de tarjeta.

	Steps to reproduce:
	- Ingresar a la pagina de inicio/ home.
 	- Seleccionar un producto de la pagina de inicio.
  	- Agregarlo al carrito y regresar a la pagina de inicio.
   	- Agregar un segundo producto al carrito de compras.
	- Ingresar a la seccion del carrito de compras.
 	- Proceder con el checkout
  	- Ingresar nombres, pais y datos de una tarjeta de credito
   	- Confirmar la compra.   

 	Expected Result:
	- Verificar que el número de tarjeta ingresado en el formulario coincida con el número mostrado en el popup de confirmación.
 	- Verificar que el nombre ingresado en el formulario coincida con el nombre mostrado en el popup de confirmación. 
	- Verificar que el pais ingresado en el formulario coincida con el pais mostrado en el popup de confirmación.

 	Attached images for support
  

Ante la duda, quedo a disposicion email: gpoliseri@gmail.com


