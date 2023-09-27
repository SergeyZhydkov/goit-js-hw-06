const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", inputMarkup);
function inputMarkup(event) {
  output.textContent = event.currentTarget.value.trim() || "Anonymous";
}
console.log(input);
console.log(output);
