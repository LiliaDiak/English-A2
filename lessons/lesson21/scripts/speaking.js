const asks = [
   ' What does the word "beauty" mean to you?',
    'Can you describe someone you consider beautiful? What makes them beautiful in your eyes?',
    'Do you think beauty is important in society? Why or why not?',
    'What do you think are the qualities that make a person beautiful on the inside?',
    'How do you think technology and social media have influenced our perception of beauty?',
   " Do you believe in natural beauty, or do you think it's okay to enhance one's appearance with makeup or cosmetic procedures?"
    
];

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass) => {
    for (let q = 0; q < mass.length; q++) {
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);