const asks = [
    "What do you do in your free time?",
    "Are you currently studying or working? What do you enjoy about it?",
    "What is your favorite type of cuisine?",
    "What is your goal in learning English?",
    "Are there any special skills or talents you have?",
    "Do you have any hobbies?",
    "Do you have any pets? What are their names?",
]

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass)=>{
    for(let q=0; q<mass.length; q++){
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);