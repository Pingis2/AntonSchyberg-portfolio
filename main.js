//import '../css/main.css'

const loaderContainer = document.getElementById('loader-container');
const spinner = document.querySelector(".spinner")

window.addEventListener('load', () => {
    setTimeout(() => {
        spinner.classList.add("hidden");
        setTimeout(() => {
            loaderContainer.style.animation = "shrink-container 1s linear forwards";
        }, 800);
    }, 200);
    
});