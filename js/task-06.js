const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", unFocus);

const count = Number(textInput.attributes["data-length"].value);

function unFocus(event) {
  event.currentTarget.value.trim().length === count
    ? (textInput.classList = "valid")
    : (textInput.classList = "invalid");
}
console.log(textInput);
