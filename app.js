// Elements selection
const toggleBtn = document.querySelector('.question-btn');
const questions = document.querySelectorAll('.question');

const spanDate = document.querySelector('.date');

const nav = document.querySelector('.nav');
console.log(nav);
// Functions

// FAQs 
questions.forEach((question) => {
    const toggleBtn = question.querySelector('.question-btn');
    toggleBtn.addEventListener('click', handleActiveClass);
    function handleActiveClass() {
        question.classList.toggle('active');
    }
})

// date of copyright
spanDate.textContent = new Date().getFullYear();

// fixing the navbar
function handleNav() {
    if (window.scrollY >= nav.clientHeight) {
        nav.style.position = 'fixed';
        nav.style.top = '0px';
        document.body.style.paddingTop = nav.clientHeight + 'px';
    } else {
        nav.style.position = 'block';
        document.body.style.paddingTop = '0';
    }
}
// Event listeners
window.addEventListener('scroll', handleNav);
