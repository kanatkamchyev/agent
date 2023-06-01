const btns = document.querySelectorAll('.btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modals = document.querySelectorAll('.modal')
const header = document.querySelector('.header__hidden')
const menu = document.querySelector('.burger__menu')
const email = document.querySelector('.header__inside__center')
const call = document.querySelector('.header__inside__right')
const close = document.querySelector('.burger__close')
const open = document.querySelector('.burger__menu')

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
        modalOverlay.classList.add('modal-overlay--visible');
    })
})


modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal-overlay--visible')
        })
    }


})


menu.addEventListener('click', ()=> {
    header.classList.add('active')
    email.classList.add('active')
    call.classList.add('active')
    close.classList.add('active')
    open.classList.add('active')
})


close.addEventListener('click', () => {
    header.classList.remove('active')
    email.classList.remove('active')
    call.classList.remove('active')
    close.classList.remove('active')
    open.classList.remove('active')
})