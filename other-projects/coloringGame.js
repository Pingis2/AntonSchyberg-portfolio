import { loaderContainerFunction } from "../main.js";

const projectDiv = document.getElementById("coloringGame");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const gridpainter = document.getElementById('Gridpainter');
const backButton = document.getElementById('backButton');
const loaderContainer = document.getElementById('loader-container');

function applyVisibilityState() {
    const visibilityState = localStorage.getItem('visibilityState');
    if (visibilityState === 'gridpainter') {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');
        hiddenProjects.classList.remove('hidden');
        gridpainter.classList.remove('hidden');
        window.addEventListener('load', () => {
            setTimeout(() => {
                //spinner.classList.add("hidden");
                setTimeout(() => {
                    loaderContainer.style.animation = "shrink-container 1s linear forwards";
                }, 800);
            }, 200);
            
        });
    } else {
        main.classList.remove('hidden');
        sideBar.classList.remove('hidden');
        hiddenProjects.classList.add('hidden');
        gridpainter.classList.add('hidden');
    }
}


backButton.addEventListener('click', () => {
    localStorage.removeItem('visibilityState', 'gridpainter');
    main.classList.remove('hidden');
    sideBar.classList.remove('hidden');
    hiddenProjects.classList.add('hidden');
    gridpainter.classList.add('hidden');

    window.addEventListener('load', () => {
        setTimeout(() => {
            //spinner.classList.add("hidden");
            setTimeout(() => {
                loaderContainer.style.animation = "shrink-container 1s linear forwards";
            }, 800);
        }, 200);
        
    });
})


/*
function removeVisibilityState() {
    const visibilityState = localStorage.getItem('visibilityState');
    if (!visibilityState === 'gridpainter') {
        main.classList.remove('hidden');
        sideBar.classList.remove('hidden');
        hiddenProjects.classList.add('hidden');
        gridpainter.classList.add('hidden');
    } else {
        main.classList.add('hidden');
        sideBar.classList.remove('hidden');
        hiddenProjects.classList.add('hidden');
        gridpainter.classList.add('hidden');
    }

}
*/

export function printGridpainter() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        gridpainter.classList.remove('hidden');    
        
        localStorage.setItem('visibilityState', 'gridpainter');
    })
}

printGridpainter();

document.addEventListener('DOMContentLoaded', applyVisibilityState);




