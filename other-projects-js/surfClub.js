const projectDiv = document.getElementById("surfClub");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const surfClub = document.getElementById('isabellasSurfClub');

export function printBeachClub() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        surfClub.classList.remove('hidden');    
        
        sessionStorage.setItem('visibilityState', 'isabellasSurfClub');

        // Temporarily disable smooth scroll
        document.documentElement.style.scrollBehavior = 'auto';

        setTimeout(() => {
            window.scrollTo(0, 0);
            
            // Re-enable smooth scroll after scrolling
            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = 'smooth';
            });
        }, 0);
    })
}

printBeachClub();