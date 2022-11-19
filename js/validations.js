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

export function validationText(textarea){
    if(textarea.validity.valid){
        textarea.nextElementSibling.classList.add("d-none");
    }else{
        textarea.nextElementSibling.classList.remove("d-none");
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
  }
}

const showErrorMessage = (inputType,input) => {
    let message = "";
    errorsType.forEach((error)=>{
        if(input.validity[error]){
            message = errorsMessages[inputType][error];
        }
    });
    return message;
}
