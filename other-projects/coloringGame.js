const projectDiv = document.getElementById("coloringGame");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const gridpainter = document.getElementById('Gridpainter');

export function printGridpainter() {
    projectDiv.addEventListener('click', () => {
        window.scrollTo(0, 0);
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        gridpainter.classList.remove('hidden');    
        
        localStorage.setItem('visibilityState', 'gridpainter');

        
    })
}

printGridpainter();