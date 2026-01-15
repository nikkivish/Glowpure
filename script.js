let cart = JSON.parse(localStorage.getItem('data')) || []
let addInCart =(img,name,price)=>{
    cart.push({
        img:img,
        name:name,
        price:price
    })
    localStorage.setItem('data',JSON.stringify(cart));
    calculate();
}
let calculate = ()=>{
    let cart_icon = document.getElementById("cartval");
    let cart_amount = cart.length;
    cartval.innerHTML= cart_amount;
}