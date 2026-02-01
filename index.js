let btn = document.getElementById("navbar-brand");
let rootElement = document.documentElement;

let savedTheme = localStorage.getItem("theme");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    rootElement.classList.toggle("dark-mode");

    if (rootElement.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
