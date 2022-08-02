const container = document.querySelector('div.py-5.text-center');
//Creamos un lector de div con la clase py-5.text-center.
const h3 = document.createElement('h3');
//Creamos nuestro elemento h3 a insertar.
container.appendChild(h3);
​//Le indicamos a conteiner (el div con la clase py-5.text-center) que nos inserte un h3 hasta el final (appendChild). 
const texto = document.createTextNode('Mi primera inserción');
//Generamos un texto para insertar en nuestro h3.
h3.appendChild(texto);
//Le indicamos al h3 que haga la inserción del texto.

