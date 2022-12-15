const productsList = () => fetch("http://localhost:3000/Store").then(response => response.json());


const addProduct = (img,category,productName,price) =>{
    return fetch("http://localhost:3000/Store",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: uuid.v4(),
            img,
            category,
            productName,
            price
        })
    })
}


export const services = {
    productsList,
    addProduct
}