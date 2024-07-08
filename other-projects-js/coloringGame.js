const projectDiv = document.getElementById("coloringGame");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const gridpainter = document.getElementById('Gridpainter');

export function printGridpainter() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        gridpainter.classList.remove('hidden');    
        
        sessionStorage.setItem('visibilityState', 'gridpainter');

        // Temporarily disable smooth scroll
        document.documentElement.style.scrollBehavior = 'auto';

        setTimeout(() => {
            window.scrollTo(0, 0);
            
            // Re-enable smooth scroll after scrolling
            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = 'smooth';
            });
        }, 0);
    });
}

printGridpainter();