// Elements selection
const toggleBtn = document.querySelector('.question-btn');
const questions = document.querySelectorAll('.question');
// Functions

questions.forEach((question) => {
    const toggleBtn = question.querySelector('.question-btn');
    toggleBtn.addEventListener('click', handleActiveClass);
    function handleActiveClass() {
        question.classList.toggle('active');
    }
})
// Event listeners
