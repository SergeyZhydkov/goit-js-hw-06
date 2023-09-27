const inputControl = document.querySelector("#font-size-control");
const targetSpan = document.querySelector("#text");

inputControl.addEventListener("input", onInput);

function onInput(evt) {
  targetSpan.style.fontSize = `${evt.target.valueAsNumber}px`;
  // console.log(evt);
}
