const burgerMenu = document.getElementById('burger');
const burgerContent = document.getElementById('burgerContent');
const burgerClose = document.getElementById('burgerClose');

function openBurger() {
    burgerMenu.addEventListener('click', () => {
        burgerContent.classList.toggle('hidden');
        burgerMenu.style.display = 'none';
    })

    burgerClose.addEventListener('click', () => {
        burgerContent.classList.toggle('hidden');
        burgerMenu.style.display = "flex";
    })
}

openBurger();