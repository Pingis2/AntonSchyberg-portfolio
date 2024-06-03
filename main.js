import './other-projects/coloringGame.js';
import './other-projects/documentCreator.js';
import './other-projects/swedishQuiz.js';
import './other-projects/webshop.js';
import './scss/main.scss';

const loaderContainer = document.getElementById('loader-container');
const backButton = document.getElementById('backButton');
const sideBar = document.getElementById('sidebar');
const gridpainter = document.getElementById('Gridpainter');
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const swedishQuizGame = document.getElementById('swedishQuizGame');
const documentCreator = document.getElementById('docCreator');
const donutWebshop = document.getElementById('donutWebshop');
const infoIcon = document.getElementById('infoIcon');
const infoBox = document.getElementById('infoBox');
const infoBoxClose = document.getElementById('infoBoxClose');

export function loaderContainerFunction() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            setTimeout(() => {
                loaderContainer.style.animation = "shrink-container 1s linear forwards";
            }, 800);
        }, 200);
        
    });
}

function applyVisibilityState() {
    const visibilityState = localStorage.getItem('visibilityState');

    main.classList.add('hidden');
    sideBar.classList.add('hidden');
    hiddenProjects.classList.add('hidden');
    gridpainter.classList.add('hidden');
    swedishQuizGame.classList.add('hidden');
    documentCreator.classList.add('hidden');
    donutWebshop.classList.add('hidden');
    
    if (visibilityState) {
        hiddenProjects.classList.remove('hidden');

        if (visibilityState === 'gridpainter') {
            gridpainter.classList.remove('hidden');
        } 
        else if (visibilityState === 'swedishquizgame') {
            swedishQuizGame.classList.remove('hidden');
        } 
        else if (visibilityState === 'documentCreator') {
            documentCreator.classList.remove('hidden');
        } 
        else if (visibilityState === 'donutWebshop') {
            donutWebshop.classList.remove('hidden');
        } 
        else {
            main.classList.remove('hidden');
            sideBar.classList.remove('hidden');
        }
            
    } else {
        main.classList.remove('hidden');
        sideBar.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', applyVisibilityState);

backButton.addEventListener('click', () => {
    console.log('click');
    localStorage.removeItem('visibilityState');
    main.classList.remove('hidden');
    sideBar.classList.add('hidden');
    hiddenProjects.classList.add('hidden');
    gridpainter.classList.add('hidden');
    swedishQuizGame.classList.add('hidden');
    documentCreator.classList.add('hidden');
    donutWebshop.classList.add('hidden');
})


loaderContainerFunction();

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

        if (scrollPercentage >= 25) {
            sidebar.style.opacity = 1;
        } else if (scrollPercentage >= 20) { 
            sidebar.style.opacity = (scrollPercentage -20) / 10;
            sidebar.classList.remove('hidden');
        } else {
            sidebar.style.opacity = 0;
            sidebar.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', checkScroll);
});

infoIcon.addEventListener('click', () => {
    infoBox.classList.remove('hidden');
})

infoBoxClose.addEventListener('click', () => {
    infoBox.classList.add('hidden');
})