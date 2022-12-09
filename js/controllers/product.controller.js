import { services } from "../service/product-service.js";

const starWars = document.getElementById("star-wars-list");
const consoles = document.getElementById("consoles-list");
const others = document.getElementById("others-list");

const newProduct = (img,category,productName,price) =>{
    const li = document.createElement("li");
    const content = `
            <img src=${img} alt="Xbox console">
            <h3>${productName}</h3><strong>$${price}</strong>
            <button type="button" class="seeProduct" data-bs-toggle="modal" data-bs-target="#CupStormtrooper">
              See product
            </button>
    `
    li.innerHTML = content;
    return li;
}

services.productsList().then((data)=>{
    data.forEach(({img,category,productName,price})=>{
        const newLine = newProduct(img,category,productName,price);
        if(category === "Star Wars"){
            starWars.appendChild(newLine);
        }else if(category === "Consoles"){
            consoles.appendChild(newLine);
        }else if(category === "Others"){
            others.appendChild(newLine);
        }
    })
})
