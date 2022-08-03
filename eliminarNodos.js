const nodoAEliminar = $0
//Creamos un nodo que eliminaremos
const padre =$0
//Creamos el nodo del padre del elemento a eliminar.
padre.removeChild(nodoAEliminar)
//Ejecutamos el evento utilizando el padre y pasando como parametro el nodo a eliminar.

//Tambien podemos obtener del padre desde el nodo que queremos eliminar.
const padre2 = nodoAEliminar.parentElement
//Tambien podemos utilizar directamente el remove child utilizando el nodo a eliminar llamando al padre.
$0.parentElement
$0.parentElement.removeChild($0)

//El otro metodo es remove en el cual solo tenemos que darle el nodo a eliminar.
const referencia = document.querySelector('h2')
referencia.remove()

//El metodo replaceChild
const padre3 = document.querySelector('div.py-5.text-center')
//Creamos un nodo de referencia padre.
const toReplace = document.querySelector('h2')
//Creamos el nodo a reemplazar.
const nodeReemplazo = document.createElement('h1')
//Creamos el nodo por el que vamos a reemplazar.
nodeReemplazo.textContent = "Form Checkout"
//Insertamos texto en nuestro nodo de reemplazo.
padre3.replaceChild(nodeReemplazo, toReplace)
//Reemplazamos haciendo referencia directa al padre, raplaceChild y dandole como parametro el nuevo nodo y el nodo que vamos a reemplazar.