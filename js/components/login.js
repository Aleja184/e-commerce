import { inputs } from "../script.js";

const loginForm = document.getElementById('login_form');

//Variable for valid the email and password
let validEmail = false;
let validPassword= false;

//Function for save email and password
export const saveData = (inputType,inputValue) =>{
    switch (inputType) {
        case "email":
            if(inputValue === "torogrisalesa@gmail.com"){
                validEmail = true;
            }else{
                validEmail = false;
            }
                
            break
        case "password":
            if(inputValue === "123"){
                validPassword = true;
            }else{
                validPassword = false;
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
    if(validEmail && validPassword){
        location.replace('../html/allProducts.html');
    }else{
        swal('Incorrect email or password','','error')
            .then(()=> location.reload());
    }
    
})