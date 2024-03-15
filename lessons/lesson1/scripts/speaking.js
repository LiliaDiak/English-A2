const asks = [
    "How do you relax after work?",
    "How often do you have a vacation?",
    "What places would you like to visit and why?",
    "Where would you never go? Why?",
    "Would you like to try extreme sports?",
    "Have you ever been robbed?"

];

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass) => {
    for (let q = 0; q < mass.length; q++) {
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);