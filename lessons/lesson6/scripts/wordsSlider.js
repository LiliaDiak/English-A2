const words = [
  {
    "id": 203,
    "image": "./images/words/hang_around.jpg",
    "word": "Hang around",
    "translation": "Тинятися без діла",
    "example": [
      "Teenagers often hang around the park after school.",
      "I like to hang around with my friends on weekends."
    ]
  },
  {
    "id": 204,
    "image": "./images/words/happen.jpg",
    "word": "Happen",
    "translation": "Відбуватися",
    "example": [
      "Do you know what will happen in the next episode of the show?",
      "Unexpected things can happen at any moment."
    ]
  },
  {
    "id": 205,
    "image": "./images/words/imaginary.jpg",
    "word": "Imaginary",
    "translation": "Уявний",
    "example": [
      "Children often have imaginary friends when they play.",
      "She enjoys reading books with imaginary worlds."
    ]
  },
  {
    "id": 206,
    "image": "./images/words/lead.jpg",
    "word": "Lead",
    "translation": "Вести",
    "example": [
      "Who will lead the team in the absence of the captain?",
      "A good leader knows how to lead by example."
    ]
  },
  {
    "id": 207,
    "image": "./images/words/merrymaking.jpg",
    "word": "Merrymaking",
    "translation": "Святкування",
    "example": [
      "During the holidays, there is usually a lot of merrymaking.",
      "The town organized a festival for a day of merrymaking."
    ]
  },
  {
    "id": 208,
    "image": "./images/words/organize.jpg",
    "word": "Organize",
    "translation": "Організовувати",
    "example": [
      "Let's organize a picnic for the weekend.",
      "She knows how to organize events smoothly."
    ]
  },
  {
    "id": 209,
    "image": "./images/words/playful.jpg",
    "word": "Playful",
    "translation": "Грайливий",
    "example": [
      "Puppies are often very playful.",
      "She has a playful personality and loves jokes."
    ]
  },
  {
    "id": 210,
    "image": "./images/words/replace.jpg",
    "word": "Replace",
    "translation": "Замінити",
    "example": [
      "It's time to replace the old light bulb with a new one.",
      "Can you replace the empty milk carton with a full one?"
    ]
  },
  {
    "id": 211,
    "image": "./images/words/respect.jpg",
    "word": "Respect",
    "translation": "Поважати",
    "example": [
      "It's important to respect other people's opinions.",
      "Respect for elders is a common value in many cultures."
    ]
  },
  {
    "id": 212,
    "image": "./images/words/return.jpg",
    "word": "Return",
    "translation": "Повертатися",
    "example": [
      "What time do you plan to return home?",
      "After a long trip, it's always good to return to familiar surroundings."
    ]
  },
  {
    "id": 213,
    "image": "./images/words/schedule.jpg",
    "word": "Schedule",
    "translation": "Розклад",
    "example": [
      "Check the schedule to know when the train departs.",
      "She likes to create a schedule to plan her day."
    ]
  },
  {
    "id": 214,
    "image": "./images/words/stay_up.jpg",
    "word": "Stay up",
    "translation": "Не спати",
    "example": [
      "It's not healthy to stay up too late every night.",
      "I had to stay up to finish my homework."
    ]
  },
  {
    "id": 215,
    "image": "./images/words/stun.jpg",
    "word": "Stun",
    "translation": "Приголомшувати",
    "example": [
      "The surprising news stunned everyone in the room.",
      "Her amazing performance never fails to stun the audience."
    ]
  },
  {
    "id": 216,
    "image": "./images/words/thought.jpg",
    "word": "Thought",
    "translation": "Думка",
    "example": [
      "Deep thoughts often come to mind during quiet moments.",
      "Share your thoughts with others to have meaningful conversations."
    ]
  },
  {
    "id": 217,
    "image": "./images/words/variety.jpg",
    "word": "Variety",
    "translation": "Різноманітність",
    "example": [
      "The store offers a variety of fruits and vegetables.",
      "Having a variety of options makes decision-making more interesting."
    ]
  }
]



const wrap = document.querySelector('.wrap');
const putWords = (mass) => {
    for (let word of mass) {
        wrap.innerHTML += `<div class="card">
        <div class="front">
          <img class="front__img" width="390px" height="420px" src="${word.image}" alt="">
          <p class="font__word">${word.word}</p>
        </div>
        <div class="back">
        <img width="390px" height="420px" src="${word.image}" alt="">
          <h3 class="back__trans">${word.translation}</h3>
            <span>${word?.example[0]}</span>
            <span>${word?.example[1]}</span>
        </div>
      </div>`
    }
}
putWords(words);
$('.wrap').slick();