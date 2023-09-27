const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    return alert("All inputs must be completed!");
  }
  console.log({ email: emailInput, password: passwordInput });
  loginForm.reset();
});
