let cart = JSON.parse(localStorage.getItem("data")) || [];

let total = 0;
cart.forEach(item => {
  total += item.price;
});

document.getElementById("totalAmount").innerText = `Total: ₹${total}`;

function payNow() {
  alert("Payment Successful! 🎉\nThank you for shopping with GlowPure.");

  // clear cart after payment
  localStorage.removeItem("data");

  // redirect to home
  window.location.href = "index.html";
}
