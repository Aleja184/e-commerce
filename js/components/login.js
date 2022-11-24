import { inputs } from "../script.js";

const loginForm = document.getElementById('login_form');

//Variable for valid the email and password
let valid = false;

//Function for save email and password
export const saveData = (inputType,inputValue) =>{
    switch (inputType) {
        case "email":
            if(inputValue === "torogrisalesa@gmail.com"){
                valid = true;
            }else{
                valid = false;
            }
                
            break
        case "password":
            if(inputValue === "123"){
                valid = true;
            }else{
                valid = false;
            }
            break
        default:
            valid = false;
    }
}

//In this case we have to know what input has a datum. And use the arrow function saveData for valid the data. 
inputs.forEach((input)=>{
    input.addEventListener("blur",(input)=>{
        saveData(input.target.dataset.type,input.target.value)
    });
})



//Event onsubmit Login
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(valid){
        location.replace('../html/allProducts.html');
    }else{
        swal('Incorrect email or password','','error');
    }
    
})