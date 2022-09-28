//* Puedes darle estilos al DOM por medio de 3 distintas formas.

//* 1.- Tailwind: 
//En este caso estamos ocupando un framework de estilos llamado
//Tailwind el cual nos permite modificar los estilos por medio
// de clases que podemos revisar directamente desde su pagina y ocuparlas
// segun nos convenga: https://tailwindcss.com/

//Jugando con la clase del elemento creado:
container.className = "max-w-sm rounded overflow-hidden shadow-lg inline-block"


//* 2.- Añadiendo la propiedad style.
//Colocando la propiedad directamente.
container.style = "font-size:16rem";
//Manejando como propiedad cada estilo.
container.style.fontSize = "16rem"; 

//* 3.- Por medio de clases (Similar a Tailwind), solo que aqui
//* declararemos la clase y modificaremos en el index.css
container.className = "nombreAUtilizarEnArchivoCSS";

//! Tambien podemos dar formato a las monedas de la siguiente forma:

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
}

price.textContent = formatPrice(aguacatito.price);

