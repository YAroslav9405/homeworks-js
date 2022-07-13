export default () => {
    let navOpener = document.querySelector('.js-nav-opener');
    let nav = document.querySelector('.profile');
    
    navOpener.addEventListener('click', () => {
       nav.classList.add('active-new');
        
    });
}