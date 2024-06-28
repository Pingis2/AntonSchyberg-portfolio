import './other-projects-js/coloringGame.js';
import './other-projects-js/documentCreator.js';
import './other-projects-js/swedishQuiz.js';
import './other-projects-js/webshop.js';
import './other-projects-js/surfClub.js';
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
const isabellasSurfClub = document.getElementById('isabellasSurfClub')
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
    isabellasSurfClub.classList.add('hidden');
    
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
        else if (visibilityState === 'isabellasBeachClub') {
            isabellasSurfClub.classList.remove('hidden');
        } 
        else {
            main.classList.remove('hidden');
            sideBar.classList.remove('hidden');
        }
            
    } else {
        main.classList.remove('hidden');
        sideBar.classList.remove('hidden');
    }

    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        localStorage.removeItem('scrollPosition');
    }
}

document.addEventListener('DOMContentLoaded', applyVisibilityState);

function saveScrollPosition() {
    localStorage.setItem('scrollPosition', window.scrollY);
}

backButton.addEventListener('click', () => {
    localStorage.removeItem('visibilityState');
    main.classList.remove('hidden');
    sideBar.classList.add('hidden');
    hiddenProjects.classList.add('hidden');
    gridpainter.classList.add('hidden');
    swedishQuizGame.classList.add('hidden');
    documentCreator.classList.add('hidden');
    donutWebshop.classList.add('hidden');
    isabellasSurfClub.classList.add('hidden');

    // Restore the scroll position
    //const scrollPosition = localStorage.getItem('scrollPosition');
    //if (scrollPosition) {
    //    window.scrollTo(0, parseInt(scrollPosition, 10));
    //    localStorage.removeItem('scrollPosition');
    //}
})

document.querySelectorAll('.my-other-projects').forEach(link => {
    link.addEventListener('click', saveScrollPosition);
});


loaderContainerFunction();

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
        const windowWidth = window.innerWidth;

        if (windowWidth > 1439) {
            if (scrollPercentage >= 25) {
                sidebar.style.opacity = 1;
            } else if (scrollPercentage >= 20) { 
                sidebar.style.opacity = (scrollPercentage -20) / 10;
                sidebar.classList.remove('hidden');
            } else {
                sidebar.style.opacity = 0;
                //sidebar.classList.add('hidden');
            }
        } else {
            sideBar.classList.add('hidden');
        }
        
    }

    window.addEventListener('scroll', checkScroll);

    function handleSidebarResize() {

        const visibilityState = localStorage.getItem('visibilityState');
        if (window.innerWidth < 1440) {
            sideBar.classList.add('hidden')
        } else {
            if (visibilityState === 'gridpainter' || 
                visibilityState === 'swedishquizgame' || 
                visibilityState === 'documentCreator' || 
                visibilityState === 'donutWebshop' ||
                visibilityState === 'isabellasSurfClub') {
                sideBar.classList.add('hidden');
            } else {
                sideBar.classList.remove('hidden');
            }
            
        }
    }

    window.addEventListener('resize', handleSidebarResize);

    handleSidebarResize();
});

infoIcon.addEventListener('click', () => {
    infoBox.classList.remove('hidden');
})

infoBoxClose.addEventListener('click', () => {
    infoBox.classList.add('hidden');
})

function alertClosed () {
    const alert = document.getElementById('alert');

    if (alert) {
        alert.addEventListener('click', () => {
            alert.classList.add('hidden');
            sessionStorage.setItem('alert closed', true);
        })

        if (sessionStorage.getItem('alert closed') === 'true') {
            alert.classList.add('hidden');
        }
    } 
    
}

alertClosed();