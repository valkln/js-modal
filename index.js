/* menus */

document.getElementById('menu').onmouseover = (event) => {
	let target = event.target;
	if (target.className == 'menu__item') {
		let s = target.getElementsByClassName('menu__subitem');
		closeMenu();
		s[0].style.display = 'block';
	}
}
document.onmouseover = (event) => {
	let target = event.target;
	if (target.className !== 'menu__item' && target.className !== 'menu__subitem') {
		closeMenu();
	}
}
closeMenu = () => {
	let menu = document.getElementById('menu');
	let submenu = document.getElementsByClassName('menu__subitem');
	for (let i = 0; i < submenu.length; i++) {
		submenu[i].style.display = 'none'
	}
}

/* modal */

let modal = document.getElementById('modal__window');
let btn = document.getElementById('modal__btn');
let close = document.getElementById('modal__close');

btn.onclick = () => {
	modal.style.display = 'block'
}
close.onclick = () => {
	modal.style.display = 'none'
}
