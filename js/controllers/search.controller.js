import { services } from "../service/product-service.js";
import { product } from "./allProducts.controller.js";

const search = document.getElementById("search");
const list = document.getElementById("allProducts");
const section = document.getElementById("searchProducts");
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
    if(dataSearch.length){
        list.style.display = "none";
        section.appendChild(ul);
        arrayProducts(dataSearch).then((response) => {
            ul.innerHTML = "";
            response.map(({id,img,category,productName,price,description})=> {
                ul.appendChild(product(id,img,category,productName,price,description));
            })
        })
    }else {
        section.removeChild(ul);
        list.style.display = "grid";
    }
})

search.addEventListener("blur",({target})=>{
    const dataSearch = target.value;
    if(dataSearch.length === 0){
        section.removeChild(ul);
        list.style.display = "grid";
    }
});





