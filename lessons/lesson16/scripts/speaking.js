const asks = [
"What can make the date perfect?",
"What are the most common reasons for people to break off their relationships?",
"Do you believe in love at first sight? Explain your opinion.",
"Can a relationship work after lies?",
"Why are some dating apps like Tinder so popular nowadays?",
"What’s your attitude towards dating apps? Do you think it is possible to meet your other half this way?"
];

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass) => {
    for (let q = 0; q < mass.length; q++) {
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);