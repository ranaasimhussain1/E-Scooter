const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const mainContainer = document.querySelector(".container");

signupBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("change");
});
signinBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("change");
});

// Get reference to the back button
const backButton = document.getElementById("backButton");

// Add click event listener for the back button
backButton.addEventListener("click", function () {
  // Redirect back to the root page (assuming the root page is 'index.html')
  window.location.href = "../index.html";
});
