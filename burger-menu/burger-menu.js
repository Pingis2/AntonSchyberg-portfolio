const burgerMenu = document.getElementById('burger');
const burgerContent = document.getElementById('burgerContent');
const burgerCurved = document.getElementById('burgerCurved');

function openBurger() {
    burgerMenu.addEventListener('click', () => {
        burgerContent.classList.toggle('hidden');
    })

    burgerCurved.addEventListener('click', () => {
        burgerContent.classList.toggle('hidden');
    })
}

openBurger();

function checkScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
    const windowWidth = window.innerWidth;

    if (windowWidth > 344) {
        if (scrollPercentage >= 15) {
            burgerMenu.style.display = 'none';
            burgerCurved.style.display = 'flex';
            burgerCurved.style.justifyContent = 'flex-end';
        } else { 
            burgerMenu.style.display = 'flex';
            burgerCurved.style.display = 'none';
        }
    } else {
        burgerMenu.style.display = 'flex';
        burgerCurved.classList.add('hidden');
    }
    
}

window.addEventListener('scroll', checkScroll);

checkScroll();