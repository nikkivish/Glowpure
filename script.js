// Get user from localStorage
const user = JSON.parse(localStorage.getItem("glowpureUser"));
const navUser = document.getElementById("navUser");

/* ===== NAVBAR PROFILE ===== */
if (user) {
  navUser.innerHTML = `
    <div class="profile-wrapper" onclick="toggleDropdown()">
      <span class="profile-name">👤 ${user.name}</span>
      <div class="profile-dropdown" id="profileDropdown">
        <p onclick="logout()">Logout</p>
      </div>
    </div>
  `;
} else {
  navUser.innerHTML = `<a href="signup.html">Sign Up</a>`;
}

/* ===== SIGNUP POPUP (ONLY IF NOT LOGGED IN) ===== */
if (!user) {
  setTimeout(() => {
    const modal = document.getElementById("signupModal");
    if (modal) modal.style.display = "flex";
  }, 5000);
}

/* ===== MODAL FUNCTIONS ===== */
function closeModal() {
  document.getElementById("signupModal").style.display = "none";
}

function goToSignup() {
  window.location.href = "signup.html";
}

function outsideClick(e) {
  if (e.target.id === "signupModal") closeModal();
}

/* ===== PROFILE DROPDOWN ===== */
function toggleDropdown() {
  const drop = document.getElementById("profileDropdown");
  drop.style.display = drop.style.display === "block" ? "none" : "block";
}

/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem("glowpureUser");
  window.location.reload();
}
