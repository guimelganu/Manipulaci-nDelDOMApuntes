//Para hacer interactiva nuestra pagina Web necesitamos colocarle
//eventos al JavaScript.

//* Agregar un evento:
node.addEventListener();

//* Eliminar un evento:
node.removeEventListener();

//* Ejemplo del evento click:
const input = getElementById('ID');
input.addEventListener('click', () => {
    console.log('Diste un click');
})

//* Ejemplo de evento input:
input.addEventListener('input', () => {
    console.log('Escribiste en un input');
})

//* Eliminar un evento de un nodo:
const email = getElementbyId('email');
const action1 = () => console.log('Acción 1');
const action2 = () => console.log('Acción 2');

email.addEventListener('click', action1);
email.addEventListener('click', action2);
//!Eliminamos el segundo listener.
email.removeEventListener('clicl', action2);

//!Propagación, en palabras simples es el desencadenamiento
//!de un evento para que se ejecuten otros eventos que dependen
//!de ese primer elemento para ejecutarse.

const hijo = getElementById('div');
const padre = getElementById('section');
const raiz = getElementById('body');

const action = (event) => {
    console.log(`Hola desde: ${event.currentTarget.nodeName}`);
}

hijo.addEventListener('click', action);
padre.addEventListener('click', action);
raiz.addEventListener('click', action);

//*Si dieramos clic en cualquiera de ellos se ejecutaria el listener
//*pero desencadenaria los listeners de los eventos mas arriba jerarquicamente (Padres).


//!Tambien se puede detener la propagación de eventos:
//!(Se recomienda no detener la propagación y dejar que el DOM funcione con normalidad)

const titulo = getElementById('h3');
titulo.addEventListener('click',(event) => {
    event.stopPropagation();
    console.log(`Hola desde: ${event.currentTarget.nodeName}`);
})

//*Delegación de eventos.
//*Se delega a un elemento padre que se encargue de escuchar el evento
//*y que pase el evento a tos sus hijos.

const appNode = document.querySelector('#app');

//Se agrega un listener al padre
appNode.addEventListener('click', (event) => {
    //Retornara el "Hola", solo si el target del click es un H2
    if (event.target.nodeName === "H2"){
        window.alert("Hola");
    }
});