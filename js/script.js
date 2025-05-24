document.addEventListener("DOMContentLoaded", () => {
  console.log("Duwy Portfolio Loaded");

  // Example interaction
  const buttons = document.querySelectorAll(".button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });
});