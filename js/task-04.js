const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const plusButton = document.querySelector('button[data-action="increment"]');

const minusButton = document.querySelector('button[data-action="decrement"]');

const counterValue = document.querySelector("#value");

plusButton.addEventListener("click", function () {
  counter.increment();
  counterValue.textContent = counter.value;
});

minusButton.addEventListener("click", function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});
