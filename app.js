// Elements selection
const toggleBtn = document.querySelector('.question-btn');
const questions = document.querySelectorAll('.question');

const spanDate = document.querySelector('.date');

const nav = document.querySelector('.nav');
const header = document.querySelector('header');
console.log(header);

const linksList = document.querySelector('ul.links');
const menuBars = document.querySelector('.menu-bars');
const closeBtn = document.querySelector('.close');
// Functions

// FAQs 
questions.forEach((question) => {
    question.addEventListener('click', handleActiveClass);
    function handleActiveClass() {
        question.classList.toggle('active');
    }
})

// date of copyright
spanDate.textContent = new Date().getFullYear();

// fixing the navbar
function handleNavFixation() {
    if (window.scrollY >= nav.clientHeight) {
        
        nav.style.position = 'fixed';
        nav.style.top = '0px';
    } else {
        nav.style.position = 'block';
    }
}

// showing and hiding nav menu on tablets
function toggleNav() {
    if (menuBars.classList.contains('active') || closeBtn.classList.contains('active')) {
        menuBars.classList.toggle('active');
        closeBtn.classList.toggle('active');
        linksList.classList.toggle('hide');

    }
}
// Event listeners
window.addEventListener('scroll', handleNavFixation);
menuBars.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);
