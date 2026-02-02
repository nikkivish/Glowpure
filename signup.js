document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("glowpureUser", JSON.stringify(user));

  window.location.href = "index.html"; // back to home
});
