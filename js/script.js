import { validation, validationText } from "./validations.js";

//Inputs and textarea
const inputs = document.querySelectorAll('input');
const textarea = document.querySelectorAll('textarea')

//Buttons
const sendMessage = document.getElementById('sendMessage');


inputs.forEach((input)=>{
    input.addEventListener("blur",(input)=>{
        validation(input.target);
    })
})

textarea.forEach((text)=>{
    text.addEventListener("blur",(text)=>{
        validationText(text.target);
    })
})

sendMessage.addEventListener('click',(e)=>{
    e.preventDefault();
    sweet();
})

function sweet(){
    swal('Sent','','success')
}