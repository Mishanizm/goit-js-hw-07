const counterValue = document.getElementById("value");
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

let count = 0;

incrementButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});

decrementButton.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});
