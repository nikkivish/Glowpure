let shopcrt = document.getElementById("shoppingcart");

let cart = JSON.parse(localStorage.getItem("data")) || [];

let calculate = () => {
    let cartcon = document.getElementById("cartval2");
    cartcon.innerHTML = cart.length;
};

let generatestore = () => {
    if (cart.length !== 0) {
        shopcrt.innerHTML = cart
            .map((x) => {
                let { img, name, price } = x;
                return `
                <div class="cartitem">
                <img src="logo.png">
                    <p class="pname">${name}</p>
                    <div class="cartimg">
                    <img width=100px src="${img}">
                    </div>
                    <p class="cartprice">$${price}</p>
                    <button class="remove" onclick="removebtn('${name}')">Remove</button>
                </div>
                `;
            })
            .join("");
    Total();
    } 
  else {
    shopcrt.innerHTML = `
        <div class="empty-cart">
            <img src="emptycart.jpg" class="emptycrt">
            <p class="label">Cart is empty</p>
        </div>
    `;
}    
};

let removebtn = (name)=>{
    cart=cart.filter((x)=> x.name != name);
    localStorage.setItem('data',JSON.stringify(cart));
    calculate();
    generatestore();
}
let Total = () => {
    let totalamount = 0;

    cart.forEach((item) => {
        totalamount += item.price;
    });

    document.querySelector(".label").innerHTML = `
        <h3>Total amount: $${totalamount}</h3><div class="chkbtn">
        <button class="checkout-btn" onclick="checkout()">Checkout</button></div>
    `;
};

calculate();
generatestore();
    

