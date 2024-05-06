const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const counterDisplay = document.getElementById("counterDisplay");

let counter = 0;

const limit = 20;

const updateCounterDisplay = () => {
  if (counter > limit) {
    limit = counter;
  }
  if (counter < 0) {
    counter = 0;
  }
  counterDisplay.textContent = counter;
};

increment.addEventListener("click", () => {
  counter++;
  updateCounterDisplay();
  //   counterDisplay.textContent = counter;
});

decrement.addEventListener("click", () => {
  counter--;
  updateCounterDisplay();
  //   counterDisplay.textContent = counter;
  /*   if (counter < 0) {
    counter = 0;
    counterDisplay.textContent = counter;
  } */
});
