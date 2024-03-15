const asks = [
    "How do you make new friends?",
    "How many best friends does a person usually have?",
    "What traits of character are important for the best friend? And why?",
    "Does friendship always mean happy moments?",
    "Do you think it is a good idea to borrow money from a friend? Why or why not?",
    "Does a perfect friend have to be the same as you or not? And why?",

];

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass) => {
    for (let q = 0; q < mass.length; q++) {
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);