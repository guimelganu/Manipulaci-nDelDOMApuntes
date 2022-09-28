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