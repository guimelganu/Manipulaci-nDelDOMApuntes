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
container.append('hola 2', document.createElement('div'));
//Le indicamos que agregue un texto, cree e inserte un elemento div.

//Creamos un nuevo elemento, luego un punto de referencia (el h2) y le indicamos el elemento y antes de que lo vamos a insertar.
const titulo = document.createElement('h1')
const referencia = document.querySelector('h2')
container.insertBefore(titulo, referencia) //node.insertBefore(nuevoNodo,Referencia).
//Unicamente creamos un nodo de texto y se lo agregamos al elemento que insertamos.
const tituloTxt = document.createTextNode('Titulo Chingon')
titulo.appendChild(tituloTxt)

const referencia2 = document.querySelector('h2')
const nodo = document.createElement('span')
referencia2.insertAdjacentElement('beforeend', nodo)
//Inserta antes de terminar el elemento.
referencia2.insertAdjacentElement('afterend', nodo)
//Inserta despues de donde termina el elemento.
referencia2.insertAdjacentElement('afterbegin', nodo)
//Inserta justo despues de empezar el elemento.
referencia2.insertAdjacentElement('beforebegin', nodo)
//Inserta antes de empezar el elemento.

//InsertAdjacentElement te permite insertar un elemento que no hayamos definido previamente.
referencia2.insertAdjacentElement('beforebegin', '<div>')

//Tenemos que tener cuidado, ya que la lectura del codigo HTML (outerHTML) nos permite guardar y modificar el codigo
//HTML con el metodo innerHTML.
const nodo2 = document.querySelector('h2')
//Definimos el nodo.
nodo2.outerHTML
//Vemos el codigo HTML del nodo.
nodo2.innerHTML = 'Ah perro!'
//Modificamos el valor del nodo.

$0 // = <div class=​"py-5 text-center">​</div>​
$0.outerHTML
//Vemos el codigo HTML del bloque que representa $0.
const nuevoHTML = $0.outerHTML.replace('Ah perro!','HDSPM')
//Guardamos el valor del bloque y reemplazamos el valor 'Ah perro!' por 'HDSPM'.
$0.outerHTML = nuevoHTML
//Le damos el valor a nuestro codigo modificado del bloque de codigo original e hicimos un XSS en nuestra pagina.
