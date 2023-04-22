const barEl = document.getElementById("bar");
const closeNavEl = document.getElementById("close-nav");
const navLinks = document.getElementById("nav-links");


function modalPage() {
    navLinks.style.right = "0";
}

function closeModal() {
    navLinks.style.right = "-200px";
}

barEl.addEventListener('click', modalPage);
closeNavEl.addEventListener('click', closeModal);

