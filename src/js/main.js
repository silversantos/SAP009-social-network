import footer from "./components/footer.js";

const main = document.querySelector("#root");

window.addEventListener("load", () => {
  main.appendChild(footer());
});
