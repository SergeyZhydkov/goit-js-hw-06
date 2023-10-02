const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formSubmit);
function formSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("All inputs must be completed!");
  } else {
    console.log({ email: email.value, password: password.value });
  }
  loginForm.reset();
}
