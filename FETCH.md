#  **FETCH**  

**FETCH** se usa para acceder y manipular partes del canal HTTP a través de una interfaz JavaScript. Proporciona un método global, llamado **fetch()** que facilita la obtención de recursos de forma asíncrona por la red.

 “**Asíncrono**” es un término que se refiere a cuando más de una cosa, relacionada o no al resto, que ocurre al mismo tiempo sin esperar a que la previa se haya completado. 

 **Promise** es la base de la programación asíncrona en JavaScript. Una “promesa” es un objeto devuelto por una función asíncrona que representa el estado de una operación. Esto permite que pueda devolver valores de forma síncrona; en lugar de devolver el valor final, el método devuelve la promesa de proporcionar el valor en algún momento en el futuro. 

Una Promesa puede encontrarse en tres estados:
 -  ***pending***: la operación no está cumplida ni rechazada.
-  ***fulfilled**:* la operación se ha completado con éxito. 
- ***rejected**:* la operación ha fallado. 

Cuando esta promesa sea rechazada o cumplida, se llama a sus controladores asociados con el método .then(). 

Este método puede tener hasta dos argumentos: la devolución de llamada (**callback**) para una operación completada y la función de devolución para una rechazada.

Esto se solía conseguir mediante XMLHttpRequest, el cual es un objeto de JS que agiliza la obtención de información de una URL sin tener que recargar la página entera. Fetch es una mejor alternativa, ya que aporta un único lugar lógico en el que definir conceptos relacionados con HTTP como CORS. 

Un ejemplo de una petición básica de fetch, originado de 
[*mdn web docs](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)*:* 
```javascript
fetch('http://example.com/movies.json') .then(response => response.json()) .then(data => console.log(data)); 
```
En este código, estamos llamando a un archivo JSON e imprimiendo por consola. 

Este es el uso de **fetch()** más básico; tomar un argumento (la ruta del recurso que se quiera obtener) y devolver un objeto Promise, que en este caso es un **Response**, con la respuesta HTTP. Si quisiéramos conseguir el cuerpo del JSON, tendríamos que utilizar el método **json()**.

 Este método **fetch()** puede aceptar un segundo parámetro, un objeto init que permite controlar diferentes ajustes. 

Uno de ellos, es la opción **method,** que puede tener los siguientes parámetros: 
-  **GET**, que se utiliza para conseguir datos del servidor, de forma read-only. De esta forma, no hay riesgo de corrupción de datos.
-   **POST**, un método que envía información al servidor y crea un nuevo recurso. Se emplea para producir una nueva entrada de datos.
-   **PUT**, que se usa para actualizar un recurso existente. 
-  **DELETE**, que sirve para eliminar un recurso específico por su URI. 

Un ejemplo de código, en donde se nos muestra algunas opciones y sus posibles parámetros: 
```javascript
// Ejemplo implementando el metodo POST: async function postData(url = '', data = {}) { ` `// Opciones por defecto estan marcadas con un \* ` `const response = await fetch(url, { ` `method: 'POST', // \*GET, POST, PUT, DELETE, etc. ` `mode: 'cors', // no-cors, \*cors, same-origin ` `cache: 'no-cache', // \*default, no-cache, reload, force-cache, only-if-cached ` `credentials: 'same-origin', // include, \*same-origin, omit ` `headers: { ` `'Content-Type': 'application/json' ` `// 'Content-Type': 'application/x-www-form-urlencoded', ` `}, ` `redirect: 'follow', // manual, \*follow, error ` `referrerPolicy: 'no-referrer', // no-referrer, \*no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url ` `body: JSON.stringify(data) // body data type must match "Content-Type" header ` `}); ` `return response.json(); // parses JSON response into native JavaScript objects } postData('https://example.com/answer', { answer: 42 }) .then(data => { ` `console.log(data); // JSON data parsed by `data.json()` call ` `});
```
 Si nuestra petición es rechazada, será rechazada con un **TypeError** si es un error de red. Una forma de comprobar si la petición fetch() ha funcionado es comprobar si la promesa ha sido resuelta y la propiedad **Responde.ok** tiene un valor true. ** ` 
```javascript
`fetch('flores.jpg').then(function(response) { ` `if(response.ok) { ` `response.blob().then(function(miBlob) { ` `var objectURL = URL.createObjectURL(miBlob); ` `miImagen.src = objectURL; ` `}); ` `} else { ` `console.log('**Respuesta de red OK pero respuesta HTTP no OK**'); ` `} }) .catch(function(error) { ` `console.log('Hubo un problema con la petición Fetch:' + error.message); });
```
