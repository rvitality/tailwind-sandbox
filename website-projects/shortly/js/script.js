const errorMsg = document.querySelector("#error-msg");
const urlForm = document.querySelector("#url-form");
const linkInput = document.querySelector("#link-input");

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

// ! MOBILE MENU =========================================
menuBtn.addEventListener("click", e => {
    menuBtn.classList.toggle("open");
    // mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("show-menu");
});

// ! FORM URL INPUTV VALIDATION ==========================
const validURL = str => {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
            "((\\d{1,3}\\.){3}\\d{1,3}))" +
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
            "(\\?[;&a-z\\d%_.~+=-]*)?" +
            "(\\#[-a-z\\d_]*)?$",
        "i"
    );
    return !!pattern.test(str);
};

urlForm.addEventListener("submit", e => {
    e.preventDefault();

    const inputValue = linkInput.value.trim();

    if (!inputValue) {
        errorMsg.innerHTML = "Please enter something";
        linkInput.classList.add("border-red");
    } else if (!validURL(inputValue)) {
        errorMsg.innerHTML = "Please enter a valid URL";
        linkInput.classList.add("border-red");
    } else {
        errorMsg.innerHTML = "";
        linkInput.classList.remove("border-red");
        alert("Success");
    }
});
