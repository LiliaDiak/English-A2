const asks = [
"What is your favorite type of weather?",
"Describe the weather today using three adjectives.",
"What season do you enjoy the most? Why?",
"Have you ever experienced extreme weather conditions? Describe.",
"Do you prefer sunny or cloudy days? Why?",
"How does the weather affect your mood?",
"Do you check the weather forecast before making plans? Why or why not?",
"Have you ever witnessed a rainbow after a rain shower?",
];

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass) => {
    for (let q = 0; q < mass.length; q++) {
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);