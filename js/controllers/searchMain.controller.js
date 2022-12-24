import { services } from "../service/product-service.js";
import { newProduct } from "./product.controller.js";


const search = document.getElementById("search");
const listProducts = document.getElementById("products");
const banner = document.getElementById("banner");
const productsSearch = document.getElementById("searchProducts");
const ul = document.createElement("ul");
ul.id = "list-search";

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
        banner.style.display = "none";
        listProducts.style.display = "none";
        productsSearch.appendChild(ul);
        arrayProducts(dataSearch).then((response) => {
            ul.innerHTML = "";
            response.map(({id,img,productName,price,description})=> {
                ul.appendChild(newProduct(id,img,productName,price,description));
                console.log(productName);
            })
        })
    }else{
        productsSearch.removeChild(ul);
        banner.style.display = "block";
        listProducts.style.display = "block";
    }
});


