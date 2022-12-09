import { services } from "../service/product-service.js";
import { product } from "./allProducts.controller.js";

const search = document.getElementById("search");
const list = document.getElementById("allProducts-list");
const section = document.getElementById("allProducts");
const ul = document.createElement("ul");
ul.id = "list-search";
ul.classList.add("allProducts__list");


const arrayProducts = async (input) =>{
    try {
        const array = await services.productsList();
        return array.filter(({productName})=> {
            const inputLower = input.toLowerCase();
            const productNameLower = productName.toLowerCase();
            return productNameLower.includes(inputLower);
        })
    } catch (error) {
        console.log(error);
    }
}


search.addEventListener("input",({target})=>{
    const dataSearch = target.value;
    list.style.display = "none";
    section.appendChild(ul);
    if(dataSearch.length){
        arrayProducts(dataSearch).then((response) => {
            ul.innerHTML = "";
            response.map(({img,productName,price})=> {
                ul.appendChild(product(img,productName,price));
                console.log(productName);
            })
        })
    }else {
        section.removeChild(ul);
        list.style.display = "flex";
    }
})





