const productsList = async () => await fetch("https://e-commerce-alura.onrender.com/Store").then(response => response.json());


const addProduct = (img,category,productName,price,description) =>{
    return fetch("https://e-commerce-alura.onrender.com/Store",{
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
    return fetch(`https://e-commerce-alura.onrender.com/Store/${id}`,{
        method: "DELETE"
    })
}

const updateProduct = (id,img,category,productName,price,description) =>{
    return fetch(`https://e-commerce-alura.onrender.com/Store/${id}`,{
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