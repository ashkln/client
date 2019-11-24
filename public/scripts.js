let button = document.querySelector('.navbar-collapsible-bars');
let overlay = document.querySelector('.navbar-overlay');
let close = document.querySelector('.collapsible-close');
let navlinks = document.querySelectorAll('.collapsible-link')

button.addEventListener('click',openMenu)
close.addEventListener('click',closeMenu)

function openMenu(){
    overlay.style.width = '100%';
    navlinks.forEach((link) => {
        link.style.width = "100%"
    })
}

function closeMenu(){
    overlay.style.width = '0';
    navlinks.forEach((link) => {
        link.style.width = "0"
    })

}