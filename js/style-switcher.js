/* Toggle Style Switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// To Hide Style Switcher on Scroll

window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* Theme Colors */
const alternateStyles = document.querySelectorAll(".alternate-style");

function changeStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");   
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* Theme Ligth and Dark Modes */

const dayNightMode = document.querySelector(".day-night");
dayNightMode.addEventListener("click",() => {
    dayNightMode.querySelector("i").classList.toggle("fa-sun");
    dayNightMode.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNightMode.querySelector("i").classList.add("fa-sun");
    } else {
        dayNightMode.querySelector("i").classList.add("fa-moon");
    }
})