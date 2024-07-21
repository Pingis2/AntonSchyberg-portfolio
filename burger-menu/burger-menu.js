const burgerMenu = document.getElementById('burger');
const burgerContent = document.getElementById('burgerContent');
const burgerClose = document.getElementById('burgerClose');

function openBurger() {
    burgerMenu.addEventListener('click', () => {
        burgerContent.classList.toggle('open');
    })

    burgerClose.addEventListener('click', () => {
        burgerContent.classList.toggle('open');
    })
}

openBurger();