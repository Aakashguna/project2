const btncart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnclose = document.querySelector('#cart-close');


btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
}
);

btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
   loadContent();
}

function loadContent(){
    //remove food items from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
   btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
   });


     //product item change Event
     let qtyElement=document.querySelectorAll('cart-quantity');
     qtyElement.forEach((input)=>{
      input.addEventListener('change',changeqty);
     });

     
    //product cart
    let cartBtns=document.querySelectorAll('add-cart');

    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addcart);
       });

       updatetotal();
}


   //remove item
   function removeItem(){
    if(confirm('Are Your Sure to Remove')){
    this.parentElement.remove();
}
}


    //remove item
    function removeItem(){
        this.parentElement.remove();
 
    }

//change qunatity
function changeqty(){
    if(isNaN(this.value)|| this.value<1){
        this.value=1;
    }
    loadContent();
}

//add cart
function addcart(){
let food=this.parentElement;
console.log(food.querySelector('.food-title').
innerHTML);
}

// function updatetotal()
// {
//     const cartitem=document.querySelectorAll('cart-box');
//     const  totalvalue=document.querySelectorAll('total-price');
    
    
//     let total=0;
//     cartitem.forEach(product=>{
//         let priceelement=product.querySelector('cart-price');
//         let price= parsefoat(priceelement.innerHTML.replace("Rs.",""));
//         let qty=product.querySelector('cart-quantity').value;
//         total+=(price*qty);
//         product.querySelector('cart-amt').innertext ="Rs."+(price*qty);

//     });

//     totalvalue.innerHTML='Rs.'+total;

// }

functionupdatetotal()
{
    const cartitem=document.querySelectorAll('cart-box');
    const totalvalue=document.querySelectorAll('total-price');


    let total=0;
    cartitem.foreach(product=>{
        let priceelement=product.querySelector('cart-price');
        let price = parsefloat(pricelelement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('cart-quantity').value;
        total+=(price*qty);
        product.queryselctor('cart-amt').innertext="Rs."+(price*qty);

    });

    totalvalue.innerHTML='Rs.'+total;
}







