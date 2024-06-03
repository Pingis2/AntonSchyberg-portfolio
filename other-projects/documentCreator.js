const projectDiv = document.getElementById("documentCreator");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const documentCreator = document.getElementById('docCreator');

export function printDocumentCreator() {
    projectDiv.addEventListener('click', () => {
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        documentCreator.classList.remove('hidden');    
        
        localStorage.setItem('visibilityState', 'documentCreator');
    })
}

printDocumentCreator();

//document.addEventListener('DOMContentLoaded', applyVisibilityState);