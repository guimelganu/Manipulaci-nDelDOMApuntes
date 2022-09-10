document.getElementById();
//Leer un elemento por su ID (Unicamente lee un elemento).

document.getElementsByTagName();
//Leer un elemento por el nombre de su etiqueta HTML (Lee uno o mas elementos).
//Retorna un array con todos los elementos que tengan esa etiqueta.

document.getElementsByClassName();
//Leer un elemento por el nombre de su clase.
//Retorna un array con todos los elementos hijos que tengan esa clase.

document.querySelector();
//Leer el elemento que coincida con el parametro.
//Retorna el primer valor que contenga el valor que se le paso.

document.querySelectorAll();
//Leer todos los elementos que coincidan con el parametro.
//Retorna un NodeList de todos los elementos que contengan el valor que se les paso.
//Los querySelector ocupa el estilo de CSS: . = clase  # = ID  div = tagName

//! Ejemplo:
//! const lector = document.querySelectorAll('div');
