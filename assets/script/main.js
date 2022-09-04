const btMenu = document.querySelector('.cabecalho__menu')
const menuLateral = document.querySelector('.menu-lateral')

btMenu.addEventListener('click', () => {
	menuLateral.classList.toggle('menu-lateral--ativo')
})