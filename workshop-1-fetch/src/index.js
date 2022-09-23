const url = "https://platzi-avo.vercel.app/api/avo";
const baseUrl = "https://platzi-avo.vercel.app/";
const appNode = document.querySelector('div#appNode');

const peticion = async() => {
    const response = await fetch(url)
    const data = await response.json();
    const allData = [];
    data.data.forEach((aguacatito) => {
        const image = document.createElement('img');
        image.src = baseUrl + aguacatito.image;
        const title = document.createElement('h2');
        title.textContent = aguacatito.name;
        const price = document.createElement('span');
        price.textContent = aguacatito.price;
        const container = document.createElement('div');
        container.append(image, title, price);
        allData.push(container);
    })
    appNode.append(...allData); 
} 

// const promesa = () => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         const allData = []
//         data.data.forEach((aguacatito) => {
//             const image = document.createElement('img');
//             image.src = baseUrl + aguacatito.image;
//             const title = document.createElement('h2');
//             title.textContent = aguacatito.name;
//             const price = document.createElement('span');
//             price.textContent = aguacatito.price;
//             const container = document.createElement('div');
//             container.append(image, title, price);
//             allData.push(container);
//         });
//     appNode.append(...allData);
//     });
// }

// promesa();
peticion();