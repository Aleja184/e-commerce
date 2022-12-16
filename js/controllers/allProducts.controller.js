import { services } from "../service/product-service.js";

const list = document.getElementById("allProducts-list");

export const product = (id,img,productName,price) => {
    const li = document.createElement("li");
    const content = `
    <img class="allProducts__img" src=${img} alt="Cup with shape of stormtrooper">
    <div class="allProducts__icons">
      <img src="../assets/icons/edit.png" alt="Edit icon" class="editIcon" id="${id}">
        <img src="../assets/icons/trash.png" alt="Trash icon" data-trash class="trashIcon">
    </div>            
    <h3>${productName}</h3><strong>$${price} </strong><a href="">See product</a>
    `
    li.innerHTML= content;
    const deleteProduct = li.querySelector("[data-trash]");
    deleteProduct.addEventListener("click",()=>{
        services.deleteProduct(id)
            .then((response)=>console.log(response))
            .catch((error)=> console.log(error))
    })
    return li;
}

services.productsList().then((data)=>{
    data.forEach(({id,img,productName,price})=>{
        list.appendChild(product(id,img,productName,price));
    })
})