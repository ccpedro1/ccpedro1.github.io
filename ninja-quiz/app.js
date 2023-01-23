const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector('.quiz-form');


form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = document.querySelectorAll('.quiz-form input[type=radio]:checked');
    const scoreDisplay = document.querySelector('.lead span');
    let score = 0;
    userAnswers.forEach((answer, index) => {
        answer.value === correctAnswers[index] ? score += 1 : score
    })
    score = (score / 4 * 100);
    scrollTo(0,0);
    scoreDisplay.parentElement.parentElement.parentElement.classList.remove('d-none');
    
    

    let output = 0;

    const timer = setInterval(() => {
        scoreDisplay.textContent = output + "%";
        if(output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 20)
    
});