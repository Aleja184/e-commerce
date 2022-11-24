//Validations inputs
export function validation(input){
    const inputType = input.dataset.type;
    let label = input.nextElementSibling;
    if(input.validity.valid){
        input.nextElementSibling.nextElementSibling.classList.add("d-none");
        label.nextElementSibling.innerHTML = "";
    }else{
        input.nextElementSibling.nextElementSibling.classList.remove("d-none");
        label.nextElementSibling.innerHTML = showErrorMessage(inputType,input);
    }
}

//Validations textarea
export function validationText(textarea){
    const textareaType = textarea.dataset.type;
    if(textarea.validity.valid){
        textarea.nextElementSibling.classList.add("d-none");
    }else{
        textarea.nextElementSibling.classList.remove("d-none");
        textarea.nextElementSibling.innerHTML = showErrorMessageTextarea(textareaType,textarea)
    }
}


const errorsType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const errorsMessages = {
  fullname:{
      valueMissing: "Please enter your fullname"
  },
  text:{
      valueMissing: "Please enter a message"
  },
  email: {
    valueMissing: "Please enter your email",
    typeMismatch: "Invalid email",
  },
  password:{
    valueMissing: "Please enter your password"
  },
  fileImage:{
    valueMissing: "Please select a image"
  },
  category:{
    valueMissing: "Please enter a category"
  },
  productName:{
    valueMissing: "Please enter the product name"
  },
  price: {
    valueMissing: "Please enter a price"
  },
  descriptionProduct:{
    valueMissing: "Please enter a product description"
  },
  text:{
    valueMissing: "Please enter a message"
  }
}

//Error message for inputs
const showErrorMessage = (inputType,input) => {
    let message = "";
    errorsType.forEach((error)=>{
        if(input.validity[error]){
            message = errorsMessages[inputType][error];
        }
    });
    return message;
}

//Error message for textareas
const showErrorMessageTextarea = (textareaType,textarea) =>{
    let message = "";
    errorsType.forEach((error)=>{
        if(textarea.validity[error]){
            message = errorsMessages[textareaType][error];
        }
    })
    return message;
}