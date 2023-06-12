


const addCard = () => {
    return "add to card"
}

const showSomething = () => {
    return "show something";
}

const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach(navLink => {
    navLink.addEventListener("click",showSomething)
})

