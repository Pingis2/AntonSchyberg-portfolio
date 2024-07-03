export function saveScrollPosition() {
    const fordbiddenValues = ['gridpainter', 'swedishquizgame', 'documentCreator', 'donutWebshop', 'isabellasSurfClub'];
    const visibilityState = localStorage.getItem('visibilityState');

    if (!fordbiddenValues.includes(visibilityState)) {
        const scrollPosition = window.scrollY;
        sessionStorage.setItem('scrollPosition', scrollPosition);
    }
    
}

export function restoreScrollPosition() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
}

    

window.addEventListener('scroll', saveScrollPosition);

window.addEventListener('load', restoreScrollPosition);



