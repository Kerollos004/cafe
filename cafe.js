let links = document.querySelectorAll(".link")
let icon = document.querySelector(".icon")
let menu = document.querySelector(".menu")
let inputs = document.querySelectorAll(".input")
let send = document.querySelector(".send")
let up = document.querySelector(".up")

///////////////////////////////////////
icon.addEventListener("click", () => {
    menu.classList.toggle("activemenu")
})

links.forEach((link) => {
    link.addEventListener('click', change)
    link.addEventListener('click', () => {
        menu.classList.remove("activemenu")
    })
})
function change() {
    links.forEach((link) => {
        link.classList.remove("active")
        this.classList.add("active")
    })
}
///////////////////////////////////////////
send.onclick = () => {
    inputs.forEach((input) => {
        input.value = ""
    })
}
///////////////////////////////////
window.onscroll = () => {
    if (scrollY > 20) {
        up.classList.add("actup")
    }
    else {
        up.classList.remove("actup")
    }
}
up.onclick = () => {
    window.scrollTo(
        top = "0",
        behavior = "smooth",
    )
}