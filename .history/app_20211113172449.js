// Menu effect

var navbarItem= document.querySelectorAll('.navbar-menu-item')
var subMenu= document.querySelector('.navbar-sub-menu')
console.log(navbarItem[2])
navbarItem[3].addEventListener('click', function(){
  subMenu.classList.toggle('active');
})