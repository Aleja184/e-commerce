import { services } from "../service/product-service.js";


const form = document.querySelector("[data-form]");
let reader = new FileReader();

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const img = document.querySelector("[data-img]");
    const categorySelect = document.querySelector("[data-category]");
    const category = categorySelect.options[categorySelect.selectedIndex].value;
    const productName = document.querySelector("[data-product]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    let file = img.files[0];
    reader.onloadend = function(){
        return services.addProduct(reader.result,category,productName,price,description)
        .then(()=> Swal.fire({
            title: 'Saved',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            } 
          }))
        .catch((error)=> console.log(error))
        ;
    }
    reader.readAsDataURL(file);
});