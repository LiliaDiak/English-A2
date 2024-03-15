
const words = [
  {
    "id": 105,
    "image": "./images/words/amaze.jpg",
    "word": "Amaze",
    "translation": "Дивувати",
    "example": [
      "The magic show will amaze the children.",
      "I am amazed by the beautiful scenery."
    ]
  },
  {
    "id": 106,
    "image": "./images/words/annoy.jpg",
    "word": "Annoy",
    "translation": "Докучати",
    "example": [
      "Loud noises can annoy some people.",
      "Please don't annoy your sister while she's studying."
    ]
  },
  {
    "id": 107,
    "image": "./images/words/appreciate.jpg",
    "word": "Appreciate",
    "translation": "Цінувати",
    "example": [
      "I appreciate your help with the project.",
      "It's essential to appreciate the beauty of nature."
    ]
  },
  {
    "id": 108,
    "image": "./images/words/committed.jpg",
    "word": "Committed",
    "translation": "Відданий",
    "example": [
      "She is committed to her job and works hard.",
      "Committed volunteers make a positive impact on the community."
    ]
  },
  {
    "id": 109,
    "image": "./images/words/creative.jpg",
    "word": "Creative",
    "translation": "Творчий",
    "example": [
      "Artists are known for their creative minds.",
      "Children often have very creative imaginations."
    ]
  },
  {
    "id": 110,
    "image": "./images/words/educated.jpg",
    "word": "Educated",
    "translation": "Освічений",
    "example": [
      "An educated person values continuous learning.",
      "Access to education is essential for a well-educated society."
    ]
  },
  {
    "id": 111,
    "image": "./images/words/greet.jpg",
    "word": "Greet",
    "translation": "Вітати",
    "example": [
      "Always greet your neighbors with a friendly smile.",
      "It's polite to greet people when you enter a room."
    ]
  },
  {
    "id": 112,
    "image": "./images/words/lie_in.jpg",
    "word": "Have a lie-in",
    "translation": "Валятися в ліжку",
    "example": [
      "On weekends, I like to have a lie-in and relax.",
      "She decided to have a lie-in instead of waking up early."
    ]
  },
  {
    "id": 113,
    "image": "./images/words/nap.jpg",
    "word": "Have a nap",
    "translation": "Дрімати",
    "example": [
      "After lunch, he likes to have a nap to feel refreshed.",
      "Having a short nap can improve productivity."
    ]
  },
  {
    "id": 114,
    "image": "./images/words/takeaway.jpg",
    "word": "Have a takeaway",
    "translation": "Взяти їжу на виніс",
    "example": [
      "Let's have a takeaway for dinner tonight.",
      "When you're too busy to cook, having a takeaway is convenient."
    ]
  },
  {
    "id": 115,
    "image": "./images/words/helpful.jpg",
    "word": "Helpful",
    "translation": "Готовий допомогти",
    "example": [
      "The librarian is always helpful in finding books.",
      "Being helpful to others creates a positive environment."
    ]
  },
  {
    "id": 116,
    "image": "./images/words/honest.jpg",
    "word": "Honest",
    "translation": "Чесний",
    "example": [
      "It's important to be honest and tell the truth.",
      "Honesty builds trust in relationships."
    ]
  },
  {
    "id": 117,
    "image": "./images/words/keen.jpg",
    "word": "Keen",
    "translation": "Захоплений",
    "example": [
      "She is keen to learn new languages.",
      "Young children are often keen to explore the world around them."
    ]
  },
  {
    "id": 118,
    "image": "./images/words/recall.jpg",
    "word": "Recall",
    "translation": "Згадувати",
    "example": [
      "I can't recall where I put my keys.",
      "Try to recall the details of the story."
    ]
  },
  {
    "id": 119,
    "image": "./images/words/seek.jpg",
    "word": "Seek",
    "translation": "Шукати",
    "example": [
      "If you seek knowledge, you will find it.",
      "She decided to seek advice from a mentor."
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