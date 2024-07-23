const burgerMenu = document.getElementById('burger');
const burgerContent = document.getElementById('burgerContent');
const burgerClose = document.getElementById('burgerClose');

hideBurgerOnMobile();

function openBurger() {
    burgerMenu.addEventListener('click', () => {
        burgerContent.classList.toggle('open');
    })

    burgerClose.addEventListener('click', () => {
        burgerContent.classList.toggle('open');
    })
}
openBurger();

function hideBurgerOnMobile() {
    if (sessionStorage.getItem('visibilityState') === 'gridpainter') {
        burgerMenu.style.display = 'none';
    } else if (sessionStorage.getItem('visibilityState') === 'isabellasSurfClub') {
        burgerMenu.style.display = 'none';
    } else if (sessionStorage.getItem('visibilityState') === 'swedishquizgame') {
        burgerMenu.style.display = 'none';
    } else if (sessionStorage.getItem('visibilityState') === 'documentCreator') {
        burgerMenu.style.display = 'none';
    } else if (sessionStorage.getItem('visibilityState') === 'donutWebshop') {
        burgerMenu.style.display = 'none';
    } else {
        burgerMenu.style.display = 'flex';
    }
}

