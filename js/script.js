window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finished');
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ?
            "light" :
            "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ?
            "dark" :
            "light";
    }
    localStorage.setItem("theme", theme);
});
