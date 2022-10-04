const themeToggleBtn = document.querySelector("#theme-toggle");
const darkIcon = document.querySelector("#theme-toggle-dark-icon");
const lightIcon = document.querySelector("#theme-toggle-light-icon");

const rootElement = document.documentElement;

if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme:dark)").matches)
) {
    lightIcon.classList.remove("hidden");
} else {
    darkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", () => {
    darkIcon.classList.toggle("hidden");
    lightIcon.classList.toggle("hidden");

    const currentTheme = localStorage.getItem("color-theme");

    if (currentTheme) {
        if (currentTheme === "dark") {
            rootElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            rootElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    } else {
        if (rootElement.classList.contains("dark")) {
            rootElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            rootElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    }
});
