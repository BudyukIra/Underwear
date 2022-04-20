const searchBlock = document.getElementById("search-block");
const button = document.getElementById("toggle-search");

button.addEventListener("click", () => {
    if (searchBlock.classList.contains("-opened")) {
        searchBlock.classList.remove("-opened");
    } else {
        searchBlock.classList.add("-opened");
    }
});

const popupUser = document.getElementById("user-popup");
const userButton = document.getElementById("user-icon");
const closeButton = document.getElementById("popup_close");

userButton.addEventListener("click", () => {
    if (popupUser.classList.contains("-closed")) {
        popupUser.classList.remove("-closed");
    } else {
        popupUser.classList.add("-closed");
    }
})

closeButton.addEventListener("click", () => {
    popupUser.classList.add("-closed");
})