const productsList = () => fetch("http://localhost:3000/Store").then(response => response.json());


export const services = {
    productsList,
}