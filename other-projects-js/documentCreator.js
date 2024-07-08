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
        
        sessionStorage.setItem('visibilityState', 'documentCreator');

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

printDocumentCreator();