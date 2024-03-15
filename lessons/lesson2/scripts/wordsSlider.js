
const words = [
  {
    "id": 120,
    "image": "./images/words/arrogant.jpg",
    "word": "Arrogant",
    "translation": "Зарозумілий",
    "example": [
      "His arrogant attitude made it difficult to work with him.",
      "Being arrogant often leads to strained relationships."
    ]
  },
  {
    "id": 121,
    "image": "./images/words/band_member.jpg",
    "word": "Band member",
    "translation": "Учасник групи",
    "example": [
      "Every band member contributes to the music in their unique way.",
      "Becoming a successful band member requires collaboration and skill."
    ]
  },
  // {
  //   "id": 122,
  //   "image": "./images/words/boastful.jpg",
  //   "word": "Boastful",
  //   "translation": "Хвалькуватий",
  //   "example": [
  //     " ",
  //     "Being boastful can alienate others rather than impress them."
  //   ]
  // },
  {
    "id": 123,
    "image": "./images/words/chatty.jpg",
    "word": "Chatty",
    "translation": "Балакучий",
    "example": [
      "She's a chatty person who enjoys striking up conversations with strangers.",
      "A chatty atmosphere at the party made everyone feel welcome."
    ]
  },
  {
    "id": 124,
    "image": "./images/words/childish.jpg",
    "word": "Childish",
    "translation": "Несерйозний",
    "example": [
      "His childish behavior in the meeting was unprofessional.",
      "Being childish in a serious situation can undermine your credibility."
    ]
  },
  {
    "id": 125,
    "image": "./images/words/couch_potato.jpg",
    "word": "Couch potato",
    "translation": "Лежебока",
    "example": [
      "After a long week, he becomes a couch potato on weekends.",
      "Being a couch potato is not conducive to a healthy lifestyle."
    ]
  },
  // {
  //   "id": 126,
  //   "image": "./images/words/curious.jpg",
  //   "word": "Curious",
  //   "translation": "Допитливий",
  //   "example": [
  //     "Curious children often ask insightful questions.",
  //     "Being curious about the world can lead to lifelong learning."
  //   ]
  // },
  {
    "id": 127,
    "image": "./images/words/running_late.jpg",
    "word": "Running late",
    "translation": "Запізнюватись",
    "example": [
      "I apologize for running late; there was unexpected traffic.",
      "Running late can be stressful, but it's essential to communicate about it."
    ]
  },
  {
    "id": 128,
    "image": "./images/words/start_from_scratch.jpg",
    "word": "Start from scratch",
    "translation": "Починати з нуля",
    "example": [
      "After the business failure, he decided to start from scratch.",
      "Starting from scratch requires determination and resilience."
    ]
  },
  {
    "id": 129,
    "image": "./images/words/dishonest.jpg",
    "word": "Dishonest",
    "translation": "Нечесний",
    "example": [
      "Dishonest actions can damage trust in relationships.",
      "Being dishonest may provide short-term gain but leads to long-term consequences."
    ]
  },
  {
    "id": 130,
    "image": "./images/words/fair.jpg",
    "word": "Fair",
    "translation": "Справедливий",
    "example": [
      "A fair decision considers the needs of everyone involved.",
      "Being fair in leadership promotes a positive and inclusive environment."
    ]
  },
  {
    "id": 131,
    "image": "./images/words/grumbling.jpg",
    "word": "Grumbling",
    "translation": "Буркотливий",
    "example": [
      "His grumbling about the weather became a daily routine.",
      "Constant grumbling can affect your mood and the mood of those around you."
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




