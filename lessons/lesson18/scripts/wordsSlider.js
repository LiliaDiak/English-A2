 let words = [
  {
    "id": 1,
    "image": "./images/words/honeymoon.jpg",
    "word": "Honeymoon",
    "translation": "Медовий місяць",
    "example": [
      "They went on their honeymoon to a beautiful beach resort.",
      "Their honeymoon in the mountains was filled with adventure."
    ]
  },
  {
    "id": 2,
    "image": "./images/words/anniversary.jpg",
    "word": "Anniversary",
    "translation": "Річниця",
    "example": [
      "They celebrated their anniversary with a romantic dinner.",
      "Their anniversary is on the 10th of June."
    ]
  },
  {
    "id": 3,
    "image": "./images/words/pregnant.jpg",
    "word": "Get pregnant",
    "translation": "Завагітніти",
    "example": [
      "She got pregnant after a few months of trying.",
      "They were thrilled when they found out they were going to get pregnant."
    ]
  },
  {
    "id": 4,
    "image": "./images/words/pregnancy.jpg",
    "word": "Pregnancy",
    "translation": "Вагітність",
    "example": [
      "She had a smooth pregnancy without any complications.",
      "Pregnancy is a special time for couples to bond with their baby."
    ]
  },
  {
    "id": 5,
    "image": "./images/words/cheat.jpg",
    "word": "Cheat on someone",
    "translation": "Зраджувати",
    "example": [
      "He cheated on his partner with a coworker.",
      "She discovered that her boyfriend had been cheating on her."
    ]
  },
  {
    "id": 6,
    "image": "./images/words/affair.jpg",
    "word": "Have an affair",
    "translation": "Завести інтрижку, роман на боці",
    "example": [
      "He had an affair with his neighbor.",
      "Having an affair can lead to trust issues in a relationship."
    ]
  },
  {
    "id": 7,
    "image": "./images/words/unfaithful.jpg",
    "word": "Unfaithful",
    "translation": "Невірний",
    "example": [
      "She discovered he had been unfaithful and couldn't forgive him.",
      "Being unfaithful can damage a relationship irreparably."
    ]
  },
  {
    "id": 8,
    "image": "./images/words/divorce.jpg",
    "word": "Divorce",
    "translation": "Розлучення",
    "example": [
      "They decided to get a divorce after years of unhappiness.",
      "Divorce can be emotionally challenging for everyone involved."
    ]
  },
  {
    "id": 9,
    "image": "./images/words/break_up.jpg",
    "word": "Break up",
    "translation": "Розійтись (про пару)",
    "example": [
      "They decided to break up after realizing they wanted different things.",
      "Breaking up is never easy, but sometimes it's for the best."
    ]
  },
  {
    "id": 10,
    "image": "./images/words/separate.jpg",
    "word": "Separate",
    "translation": "Розійтися (про подружжя)",
    "example": [
      "They decided to separate and live apart for a while.",
      "Separating can give couples space to figure things out."
    ]
  },
  {
    "id": 11,
    "image": "./images/words/move_together.jpg",
    "word": "Move together",
    "translation": "Переїхати разом",
    "example": [
      "They decided to move in together after getting engaged.",
      "Moving together was a big step in their relationship."
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