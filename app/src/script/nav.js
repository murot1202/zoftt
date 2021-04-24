let menu = document.querySelector('.nav__menu')
let menuBtn = document.querySelector('.nav__btn')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
})