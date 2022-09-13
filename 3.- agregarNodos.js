//! Ejemplo:
const container = document.querySelector("div.py-5.text-center");
//Creamos un nodo padre.
const h3 = document.createElement('h3');
//Creamos el nodo hijo.

//* 1ra forma de Agregar:
parentElement.appendChild(); //Agrega un hijo al final de un elemento.
//! Ejemplo:
container.appendChild(h3);
//Agregamos el nodo hijo al padre(hasta el final).
const texto = document.createTextNode('Sup');
//Creamos un nodo de texto.
h3.appendChild(texto);
//Lo agregamos el nodo hijo.

//* 2 da forma de Agregar:
parentElement.append(); //Es la evolución de appendChild, podemos agregar varios nodos a la vez y hasta texto.
//! Ejemplo:
container.append('hola', document.createElement('div'));
//Insertamos un texto y un div al final del elemento padre.

//* 3ra forma de Agregar:
parentElement.insertBefore(); /* Se le tiene que dar el nodo a insertar y una referencia (tiene que ser un hijo directo del padre) 
para que inserte antes de ella. */
//! Ejemplo:
const titulo = document.createElement('h1');
//Creamos el nodo a insertar.
const referencia = document.querySelector('h2');
//Creamos la referencia del nodo padre.
container.insertBefore(titulo, referencia);
//Insertamos en el contenedor padre el nodo que creamos ANTES que la referencia que creamos.

//* 4ta forma de Agregar:
parentElement.insertAdjacentElement(); //nodoReferencia.insertAdjacentElement(beforebegin, afterbegin, beforeend, afterend, nodoAInsertar)
//! Ejemplo:
const nodo = document.createElement('span');
referencia.insertAdjacentElement("beforeend", nodo);
//Se insertara el nodo antes de terminar el elemento de referencia.
referencia.insertAdjacentElement('afterend', nodo)
//Se insertara despues de donde termina el elemento de referencia.
referencia.insertAdjacentElement('beforebegin', nodo)
//Se insertara antes de empezar el elemento.
referencia.insertAdjacentElement('afterbegin', nodo)
//Se insertara justo despues de empezar el elemento de referencia.
//*Nota InsertAdjacentElement te permite insertar un elemento que no hayamos definido previamente.
referencia.insertAdjacentElement('beforebegin', '<div>')

//* 5ta forma de Agregar:
nodo.outerHTML; //Nos devuelve el codigo HTML como una cadena de texto.
nodo.innerHTML; //Sirve para agregar HTML.
//Tenemos que tener cuidado, ya que la lectura del codigo HTML (outerHTML) nos permite guardar y modificar el codigo

//! Ejemplo:
const nodo2 = document.querySelector('h2');
//Definimos el nodo.
nodo2.outerHTML;
//Vemos el codigo HTML del nodo.
nodo2.innerHTML = 'Ah perro!';
//Modificamos el valor del nodo.
const nuevoHTML = nodo2.outerHTML.replace('Ah perro!','HDSPM'); //(valorReemplazar, valorReemplazo)
//Guardamos el valor del bloque y reemplazamos el valor 'Ah perro!' por 'HDSPM'.
nodo2.outerHTML = nuevoHTML;
//Le damos el valor a nuestro codigo modificado del bloque de codigo original e hicimos un XSS en nuestra pagina.

//? Hack: Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0, este te devolverá el elemento 
//? tal como si lo hubieses seleccionado con document.querySelector(). */