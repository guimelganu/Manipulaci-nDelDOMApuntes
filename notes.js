/* 
    * Critical Rendering Path:
Proceso que se encarga de convertir en pixeles el HTML, CSS y JS.
y en ese procceso se crean 2 modelos de arbol:

    1.- DOM (Document Object Model): Es una representación del HTML, estructura en forma de arbol de nodos
    y pude ser modificado.
    2.- CSSOM (CSS Object Model): Es una representación del CSS.

    * ¿Que es una API?
Una API es un "puente" o "intermediario" que sirve para comunicar facilmente un pedazo de software con otro.

! Diferencia entre NodeList y un Array

NodeList = Carece de funciones que el Array SI tiene.
Pasalo a array para poder manipularlo.

Guardamos en variable y transformamos.

const nodeList = document.querySelectorAll('div');
const nodeListAsArray = [...nodeList];

*/

