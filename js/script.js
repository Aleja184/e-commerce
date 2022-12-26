import { validation, validationText } from "./validations.js";

//Inputs and textarea
export const inputs = document.querySelectorAll('input');

const textarea = document.querySelectorAll('textarea')
//Forms
const footerForm = document.getElementById('footer_form');



//Validation for each input
inputs.forEach((input)=>{
    input.addEventListener("focus",()=> input.value = "");
    input.addEventListener("blur",(input)=>{
        validation(input.target);
    });
})

//Validation for each textarea
textarea.forEach((text)=>{
    text.addEventListener("focus",()=> text.value = "");
    text.addEventListener("blur",(text)=>{
        validationText(text.target);
    });
})

//Event onsubmit sendMesagge. Footer
footerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    swal('Message delivered','','success');
})









