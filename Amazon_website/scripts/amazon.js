import {cart}from '../data/cart.js'
import{products} from'../data/products.js'
//Here is the first step  (saving data)
// the list and array of the following are sample of dataStructu
  let productsHtml='';
      const productsGrid=document.querySelector('.products-grid')
      products.forEach((product)=>{
      productsHtml +=`<div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src=${product.image}>
      </div>

      <div class="product-name limit-text-to-2-lines">
      ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars" 
        src='images/ratings/rating-${product.rating.stars*10}.png'>
        <div class="product-rating-count link-primary">
          ${
              product.rating.count
          }
        </div>
      </div>

      <div class="product-price">
      $${
          (product.priceCents/100).toFixed(2)
      }
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected="" value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button 
      button-primary js-add-to-cart"
       data-product-id= "${product.id}">
        Add to Cart
      </button>
      </div>`
    }
    )

    function addToCart(productID){
      let matchingItem;
      cart.forEach((item)=>{
        if (productID===item.productID){
            matchingItem=item
          }
       });
       if(matchingItem){
         matchingItem.quantity += 1
        }else{
          cart.push({
            productID:productID,
          quantity:1
        })
       }
       
    }
    function countCartQuantity(){
      let totalCartQuantity=document.querySelector('.cart-quantity')
      // console.log(cart)
     //  console.log("added product")
      let cartQuantity=0
  
      cart.forEach((item)=>{
       cartQuantity += item.quantity// becareful while using cases the object items elements are case sensitive
       totalCartQuantity.innerHTML=cartQuantity
       // console.log(cart)
     })
    }
    // console.log( productsHtml)
    productsGrid.innerHTML= productsHtml
    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
      button.addEventListener('click',()=>{
        const productID=button.dataset.productId;
        addToCart(productID)
        countCartQuantity()
      // console.log(cartQuantity)
    })
      //it is not good practice to use product name as dataset because in the 
      //e-commerce there maybe same name of product with different feature to 
      //solve this problem,we use ID that identify each products uniquely
    })
