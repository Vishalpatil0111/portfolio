const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

// Add an event listener to handle sticky class on scroll
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// Toggle mobile menu on menu icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

// Close mobile menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    });
});

// The rest of your code...

// Add an event listener to handle the progress bar on scroll
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
