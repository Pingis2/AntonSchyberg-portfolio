const projectDiv = document.getElementById("surfClub");
const main = document.getElementById('main');
const hiddenProjects = document.getElementById('hiddenProjects');
const sideBar = document.getElementById('sidebar');
const surfClub = document.getElementById('isabellasSurfClub');

export function printBeachClub() {
    projectDiv.addEventListener('click', () => {
        window.scrollTo(0, 0);
        main.classList.add('hidden');
        sideBar.classList.add('hidden');

        hiddenProjects.classList.remove('hidden');
        surfClub.classList.remove('hidden');    
        
        localStorage.setItem('visibilityState', 'isabellasSurfClub');

        
    })
}

printBeachClub();