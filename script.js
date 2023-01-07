const hamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".nav-list")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navList.classList.toggle("show");
})

document.querySelectorAll(".nav-list__element").forEach(n => 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    }))