document.querySelector(".header__mobile-menu").addEventListener("click", () => {
    document.querySelector(".mobile-modal").style.display = "block"
    document.querySelector(".mobile-modal").style.visibility = "visible"
})

document.querySelector(".mobile-modal-close").addEventListener("click", () => {
        document.querySelector(".mobile-modal").style.display = "none"
    document.querySelector(".mobile-modal").style.visibility = "hidden"
})