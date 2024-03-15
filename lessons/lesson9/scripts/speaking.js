const asks = [
    "On what occasions do people in your country eat a lot of food?",
    "How do you feel about attending crowded festivals?",
    "What funny and cool party games do you know?",
    "Do you know any tips on how to spend less money on celebration?",
    "What do you think about people who celebrate their pets' birthday?",
    "Are there any holidays that you really hate?"
];

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass) => {
    for (let q = 0; q < mass.length; q++) {
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);