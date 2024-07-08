const projectDiv = document.getElementById("swedishQuiz");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const swedishQuizGame = document.getElementById('swedishQuizGame');

export function printSwedishQuiz() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        swedishQuizGame.classList.remove('hidden');    
        
        sessionStorage.setItem('visibilityState', 'swedishquizgame');

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

printSwedishQuiz();