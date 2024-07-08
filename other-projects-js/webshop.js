const projectDiv = document.getElementById("webshop");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const donutWebshop = document.getElementById('donutWebshop');

export function printDonutWebshop() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        donutWebshop.classList.remove('hidden');    
        
        sessionStorage.setItem('visibilityState', 'donutWebshop');

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

printDonutWebshop();