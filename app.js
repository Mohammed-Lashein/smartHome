// Elements selection
const toggleBtn = document.querySelector('.question-btn');
const questions = document.querySelectorAll('.question');

const spanDate = document.querySelector('.date');

const nav = document.querySelector('.nav');
const header = document.querySelector('header');
console.log(header);

const linksList = document.querySelector('ul.links');
const linksListChildren = Array.from(linksList.children);
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
        nav.style.borderBottom = '1px solid white';
        nav.style.boxShadow = '1rem 1rem 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.position = 'block';
        nav.style.borderBottom = 'none';
        nav.style.boxShadow = '0 0 0 0';
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
linksListChildren.forEach((link) => {
    link.addEventListener('click', () => {
        linksList.classList.toggle('hide');
        menuBars.classList.toggle('active');
        closeBtn.classList.toggle('active');
    })
})
// handle scrolling to specific sections using fixed nav
linksListChildren.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const position = element.offsetTop;
        window.scrollTo({
            top: position - nav.getBoundingClientRect().height,
        })
    })
})
