const projectDiv = document.getElementById("swedishQuiz");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const swedishQuizGame = document.getElementById('swedishQuizGame');

export function printSwedishQuiz() {
    projectDiv.addEventListener('click', () => {
        window.scrollTo(0, 0);
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        swedishQuizGame.classList.remove('hidden');    
        
        localStorage.setItem('visibilityState', 'swedishquizgame');
    })
}

printSwedishQuiz();