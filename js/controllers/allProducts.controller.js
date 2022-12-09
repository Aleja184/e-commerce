import { services } from "../service/product-service.js";

const list = document.getElementById("allProducts-list");

export const product = (img,productName,price) => {
    const li = document.createElement("li");
    const content = `
    <img class="allProducts__img" src=${img} alt="Cup with shape of stormtrooper">
    <div class="allProducts__icons">
      <img src="../assets/icons/edit.png" alt="Edit icon" class="editIcon">
        <img src="../assets/icons/trash.png" alt="Trash icon" srcset="" class="trashIcon">
    </div>            
    <h3>${productName}</h3><strong>$${price} </strong><a href="">See product</a>
    `
    li.innerHTML= content;
    return li;
}

services.productsList().then((data)=>{
    data.forEach(({img,productName,price})=>{
        list.appendChild(product(img,productName,price));
    })
})