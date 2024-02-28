// Function to save the selected option in localStorage
function saveSelectedOption(selectElement) {
  localStorage.setItem("selectedOption", selectElement.selectedIndex);
}

// Function to set the selected option when the page loads
window.onload = function () {
  var savedIndex = localStorage.getItem("selectedOption");
  if (savedIndex !== null) {
    document.querySelector("select").selectedIndex = savedIndex;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let likeButtons = document.querySelectorAll(".like-icon");
  let dislikeButtons = document.querySelectorAll(".dislike-icon");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let numberElement = button.nextElementSibling;
      let currentNumber = parseInt(numberElement.textContent);
      numberElement.textContent = currentNumber + 1;
    });
  });

  dislikeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let numberElement = button.previousElementSibling;
      let currentNumber = parseInt(numberElement.textContent);
      numberElement.textContent = currentNumber - 1;
    });
  });
});
