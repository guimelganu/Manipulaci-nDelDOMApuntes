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

    * Atributos y Propiedaddes
El 80% del tiempo que estamos manipulando el DOM es que estamos cambiando las propiedades de un elemento. 

Los atributos son aquellos que le brindamos a una etiqueta HTML (type, class, id, placeholder).
Las propiedades son aquellos valores que son dados por el DOM y pueden ir cambiando (classname, value).

    * Operaciones en lote
Las operaciones en el DOM (Leer, escribir, eliminar o modificar nodos), tienen un costo en la velocidad de nuestro sitio.

Las operaciones en lote nos ayudan a solucionar esto:

! Ejemplo:

? Forma NO optima:
for(let i = 0; i < 100; i++){
    const node = document.createElement('input');
    document.body.appendChild(node);
}

? Forma OPTIMA:
const nodes = []
for(let i=0; i < 100; i++){
    const node = document.createElement('input');
    nodos.push(node);
}
document.body.append(...nodes); //*Se utiliza append para agregar varios elementos y ocupamos ECM 6 con el sprite operator "..."

*/

