import { validation, validationText } from "./validations.js";

//Inputs and textarea
const inputs = document.querySelectorAll('input');
const textarea = document.querySelectorAll('textarea')

//Buttons
const sendMessage = document.getElementById('sendMessage');
const login = document.getElementById('login');

//Valid password and email
let valid = false;

//Valid text in inputs
let inputsValidEmail = false;



//Validation for each input
inputs.forEach((input)=>{
    input.addEventListener("focus",()=> input.value = "");
    input.addEventListener("blur",(input)=>{
        validation(input.target); 
        saveData(input.target.dataset.type,input.target.value,input.target.validity.valid)
    });
})

//Validation for each textarea
textarea.forEach((text)=>{
    text.addEventListener("focus",()=> text.value = "");
    text.addEventListener("blur",(text)=>{
        validationText(text.target);
    });
})

//Event of the button sendMesagge
sendMessage.addEventListener('click',(e)=>{
    e.preventDefault();
    swal('Sent','','success');
})

//Event of the button Login
login.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputsValidEmail){
        if(valid){
            location.replace('../html/allProducts.html');
        }else{
            swal('Incorrect email or password','','error');
        }
    }
})


//Function for save email and password
const saveData = (inputType,inputValue,inputValidity) =>{
    switch (inputType) {
        case "email":
            inputsValidEmail = inputValidity;
            if(inputValue=== "torogrisalesa@gmail.com"){
                valid = true;
            }else{
                valid = false;
            }
                
            break
        case "password":
            if(inputValue=== "123"){
                valid = true;
            }else{
                valid = false;
            }
            break
        default:
            valid = false;
    }
}

