import { services } from "../service/product-service.js";
import { validation, validationText } from "../validations.js";

const list = document.getElementById("allProducts-list");

export const product = (id,img,productName,price,category,description) => {
    const li = document.createElement("li");
    const content = `
    <img class="allProducts__img" src=${img} alt="Cup with shape of stormtrooper">
    <div class="allProducts__icons">
        <img src="../assets/icons/trash.png" alt="Trash icon" data-trash class="trashIcon">
    </div>            
    <h3>${productName}</h3><strong>$${price} </strong>
    <button type="button" class="btn btn-primary allProducts__editProduct" data-bs-toggle="modal" data-bs-target="#Product${id}">
        Edit product
    </button>
    <!--Modal-->
        <div class="modal fade" id="Product${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit product</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <form class="addProduct__form" id="add_form"  action="submit" data-form>
              <div class="mb-3 mt-4 file">
                <input type="file" accept=".jpg,.gif,.png"  class="form-control allProducts__inputImgModal" id="floatingFile" data-type="fileImage" data-img>
                <label for="" class="d-none"></label>
                <img class="allProducts__img" src=${img} alt="Cup with shape of stormtrooper" data-output>
                <div class="alert alert-danger mt-2 p-1 d-none" role="alert">
                  Please enter a message
                </div>
              </div>
              <div class="mb-3 file select">
                <label>Category</label>
                <select id="select1" class="form-select" required data-category>
                  <option default>${category}</option>
                  <option value="Star Wars">Star Wars</option>
                  <option value="Consoles">Consoles</option>
                  <option value="Others">Others</option>
                </select>
                <div class="alert alert-danger mt-2 p-1 d-none" role="alert">
                  Please enter a message
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingProduct" placeholder="Product name" maxlength="20" data-type="productName" required data-product value=${productName}>
                <label for="floatingInput">Product name</label>
                <div class="alert alert-danger mt-2 p-1 d-none" role="alert">
                  Please enter a message
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingPrice" placeholder="Price" data-type="price" required data-price value=${price}>
                <label for="floatingInput">Price</label>
                <div class="alert alert-danger mt-2 p-1 d-none" role="alert">
                  Please enter a message
                </div>
              </div>
              <textarea name="" id="" class="form-control" placeholder="Description" maxlength="150" data-type="descriptionProduct" required data-description rows="3">${description}</textarea>
              <div class="alert alert-danger p-1 d-none" role="alert">
                Please enter a message
              </div>
              <button class="btn btn-primary allProducts__changes" type="submit">Save changes</button>
            </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    <!--/Modal-->
    `
    li.innerHTML= content;
    const inputs = li.querySelectorAll('input');
    const textarea = li.querySelectorAll('textarea')

    //Validation for each input
    inputs.forEach((input)=>{
        input.addEventListener("blur",(input)=>{
            validation(input.target);
        });
    })

    //Validation for each textarea
    textarea.forEach((text)=>{
        text.addEventListener("blur",(text)=>{
            validationText(text.target);
        });
    })
    

    //Event for delete product
    const deleteProduct = li.querySelector("[data-trash]");
    deleteProduct.addEventListener("click",async ()=>{
        await services.deleteProduct(id)
            .then((response)=>console.log(response))
            .catch((error)=> console.log(error));
        location.reload();
    })


    const updateProduct = li.querySelector("[data-form]");
    const inputImg = li.querySelector("[data-img]");
    
    
    let outputImg = li.querySelector("[data-output]");
    
    //Event for change img when the user select a new img
    inputImg.addEventListener("change",(event)=>{
      let input = event.target;
      let reader = new FileReader();
      reader.onloadend = function(){
        return outputImg.src = reader.result;
      }
      reader.readAsDataURL( input.files[0]);
    });

    //Event for submit the changes of the product
    updateProduct.addEventListener("submit",async (event)=>{
      event.preventDefault();
      const categorySelect = li.querySelector("[data-category]");
      const category = categorySelect.options[categorySelect.selectedIndex].value;
      const product = li.querySelector("[data-product]").value;
      const price = li.querySelector("[data-price]").value;
      const description = li.querySelector("[data-description]").value;
      await services.updateProduct(id,outputImg.src,category,product,price,description);
      location.reload();
    });


    
    return li;
}

services.productsList().then(async (data)=>{
    await data.forEach(({id,img,productName,price,category,description})=>{
        list.appendChild(product(id,img,productName,price,category,description));
    })
})
  .catch((error)=> console.log(error))

  