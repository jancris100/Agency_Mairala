const button = document.querySelector('.button_hamburguer_menu')
const nav    = document.querySelector('.menu')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})