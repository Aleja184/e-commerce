const productsList = () => fetch("http://localhost:3000/Store").then(response => response.json());


const addProduct = (img,category,productName,price,description) =>{
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
            price,
            description
        })
    })
}

const deleteProduct = (id) =>{
    return fetch(`http://localhost:3000/Store/${id}`,{
        method: "DELETE"
    })
}

const updateProduct = (id,img,category,productName,price,description) =>{
    return fetch(`http://localhost:3000/Store/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            img,
            category,
            productName,
            price,
            description
        })
    })
}

export const services = {
    productsList,
    addProduct,
    deleteProduct,
    updateProduct
}