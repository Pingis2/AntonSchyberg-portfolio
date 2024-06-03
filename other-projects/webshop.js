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
        
        localStorage.setItem('visibilityState', 'donutWebshop');
    })
}

printDonutWebshop();