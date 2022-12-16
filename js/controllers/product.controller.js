import { services } from "../service/product-service.js";

const starWars = document.getElementById("star-wars-list");
const consoles = document.getElementById("consoles-list");
const others = document.getElementById("others-list");

const newProduct = (id,img,category,productName,price) =>{
    const li = document.createElement("li");
    const content = `
            <img src=${img} alt=${productName}>
            <h3>${productName}</h3><strong>$${price}</strong>
            <button type="button" class="seeProduct" data-bs-toggle="modal" data-bs-target="#Product${id}">
              See product
            </button>
            <!--Modal-->
                <div class="modal fade" id="Product${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${productName}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src=${img} alt=${productName}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet voluptatibus enim inventore, voluptatum fugiat eligendi architecto qui corporis fuga quod labore perferendis sint, ex facere sequi culpa maiores fugit!</p>
                        <strong>$${price} </strong>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
            <!--/Modal-->
    `
    li.innerHTML = content;
    return li;
}

services.productsList().then((data)=>{
    data.forEach(({id,img,category,productName,price})=>{
        const newLine = newProduct(id,img,category,productName,price);
        if(category === "Star Wars"){
            starWars.appendChild(newLine);
        }else if(category === "Consoles"){
            consoles.appendChild(newLine);
        }else if(category === "Others"){
            others.appendChild(newLine);
        }
    })
})
