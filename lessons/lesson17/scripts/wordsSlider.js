 let words = [
  {
    "id": 1,
    "word": "Date",
    "translation": "Побачення",
    "image": "./images/words/date.jpg",
    "examples": [
      "John asked Mary out on a date to the movies.",
      "They went on a date to a fancy restaurant."
    ]
  },
  {
    "id": 2,
    "word": "To ask out",
    "translation": "Запросити на побачення",
    "image": "./images/words/ask_out.jpg",
    "examples": [
      "He finally got the courage to ask her out.",
      "She was thrilled when he asked her out on a date."
    ]
  },
  {
    "id": 3,
    "word": "To fall in love",
    "translation": "Закохатися",
    "image": "./images/words/fall_in_love.jpg",
    "examples": [
      "They met in college and fell in love.",
      "It didn't take long for them to fall in love with each other."
    ]
  },
  {
    "id": 4,
    "word": "Love at first sight",
    "translation": "Кохання з першого погляду",
    "image": "./images/words/love_at_first_sight.jpg",
    "examples": [
      "For them, it was love at first sight.",
      "She believed in love at first sight after meeting him."
    ]
  },
  {
    "id": 5,
    "word": "To have a crush on someone",
    "translation": "запасти на когось",
    "image": "./images/words/have_a_crush.jpg",
    "examples": [
      "She has had a crush on him since they met.",
      "He's too shy to tell her he has a crush on her."
    ]
  },
  {
    "id": 6,
    "word": "To propose",
    "translation": "робити пропозицію",
    "image": "./images/words/propose.jpg",
    "examples": [
      "He proposed to her on a beautiful beach at sunset.",
      "She cried tears of joy when he proposed to her."
    ]
  },
  {
    "id": 7,
    "word": "To be engaged",
    "translation": "Бути зарученим",
    "image": "./images/words/engaged.jpg",
    "examples": [
      "They are engaged to be married next summer.",
      "She's been engaged for six months now."
    ]
  },
  {
    "id": 8,
    "word": "Fiancé",
    "translation": "Наречений",
    "image": "./images/words/fiance.jpg",
    "examples": [
      "Her fiancé surprised her with a romantic dinner.",
      "He's my fiancé, and we're getting married next year."
    ]
  },
  {
    "id": 9,
    "word": "Fiancée",
    "translation": "Наречена",
    "image": "./images/words/fiancee.jpg",
    "examples": [
      "She introduced me to her fiancée at the party.",
      "Her fiancée gave her a beautiful ring when he proposed."
    ]
  },
  {
    "id": 10,
    "word": "Marriage",
    "translation": "Шлюб",
    "image": "./images/words/marriage.jpg",
    "examples": [
      "They're planning their marriage for next spring.",
      "Their marriage ceremony was held in a beautiful church."
    ]
  },
  {
    "id": 11,
    "word": "Bachelor party",
    "translation": "Вечірка холостяка",
    "image": "./images/words/bachelor_party.jpg",
    "examples": [
      "They're throwing him a bachelor party before his wedding.",
      "His friends organized a bachelor party in Las Vegas."
    ]
  },
  {
    "id": 12,
    "word": "Bride",
    "translation": "Наречена (на весіллі)",
    "image": "./images/words/bride.jpg",
    "examples": [
      "The bride looked stunning in her wedding dress.",
      "The bride walked down the aisle with her father."
    ]
  },
  {
    "id": 13,
    "word": "Groom",
    "translation": "Наречений (на весіллі)",
    "image": "./images/words/groom.jpg",
    "examples": [
      "The groom waited nervously at the altar.",
      "The groomsmen toasted the groom during the reception."
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
            <span>${word?.examples[0]}</span>
            <span>${word?.examples[1]}</span>
        </div>
      </div>`
    }
}
putWords(words);
$('.wrap').slick();