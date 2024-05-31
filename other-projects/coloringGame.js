const projectDiv = document.getElementById("coloringGame");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');

export function printProject() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        coloringGameDisplay.classList.remove('hidden');

    
        
    })
}

printProject();


