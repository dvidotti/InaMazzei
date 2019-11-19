let openMenu = document.getElementById('box-menu-open');

function menuToogle() {
openMenu.classList.add('box-visible');
}

function closeMenu() {
  openMenu.classList.remove('box-visible')
  openMenu.classList.add('box-hidden')
}