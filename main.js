import './scss/main.scss';

const loaderContainer = document.getElementById('loader-container');
const spinner = document.querySelector(".spinner")

window.addEventListener('load', () => {
    setTimeout(() => {
        //spinner.classList.add("hidden");
        setTimeout(() => {
            loaderContainer.style.animation = "shrink-container 1s linear forwards";
        }, 800);
    }, 200);
    
});
//animates in and out
/*
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;

        if (scrollPercentage >= 20 && scrollPercentage <= 80) {
            sidebar.classList.add('visible');
        } else {
            sidebar.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
});
*/


//fades in out and out
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;

        if (scrollPercentage >= 30) {
            sidebar.style.opacity = 1;
        } else if (scrollPercentage >= 25) { 
            sidebar.style.opacity = (scrollPercentage -25) / 10;
        } else {
            sidebar.style.opacity = 0;
        }
    }

    window.addEventListener('scroll', checkScroll);
});