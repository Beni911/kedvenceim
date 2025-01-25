const cimek = document.querySelector('.cimek');
const offscreenmenu = document.querySelector('.off-screen-menu');
const torles = document.querySelector('.torles');
cimek.addEventListener('click', () => {
    cimek.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
});
torles.addEventListener('click', () => {
    cimek.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
});