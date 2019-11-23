let button = document.querySelector('.navbar-collapsible-bars');
let overlay = document.querySelector('.navbar-overlay');
let close = document.querySelector('.collapsible-close');

button.addEventListener('click',openMenu)
close.addEventListener('click',closeMenu)

function openMenu(){
    overlay.style.width = '100%';
}

function closeMenu(){
    overlay.style.width = '0%';
}