 let words = [
  {
    "id": 1,
    "image": "./images/words/overcome.jpg",
    "word": "Overcome",
    "translation": "Подолати",
    "example": [
      "She worked hard to overcome her fear of public speaking.",
      "With determination, you can overcome any obstacle."
    ]
  },
  {
    "id": 2,
    "image": "./images/words/overestimate.jpg",
    "word": "Overestimate",
    "translation": "Переоцінювати",
    "example": [
      "He tends to overestimate his abilities.",
      "It's easy to overestimate the time needed for a task."
    ]
  },
  {
    "id": 3,
    "image": "./images/words/pay_rise.jpg",
    "word": "Pay rise",
    "translation": "Підвищення зарплати",
    "example": [
      "Employees often work harder after getting a pay rise.",
      "She was thrilled to receive a pay rise at work."
    ]
  },
  {
    "id": 4,
    "image": "./images/words/promotion.jpg",
    "word": "Promotion",
    "translation": "Підвищення",
    "example": [
      "He got a promotion after years of hard work.",
      "A promotion often comes with more responsibilities."
    ]
  },
  {
    "id": 5,
    "image": "./images/words/psychologist.jpg",
    "word": "Psychologist",
    "translation": "Психолог",
    "example": [
      "She decided to see a psychologist to talk about her anxiety.",
      "Psychologists help people deal with their emotions."
    ]
  },
  {
    "id": 6,
    "image": "./images/words/quit.jpg",
    "word": "Quit",
    "translation": "Кидати",
    "example": [
      "He decided to quit his job and travel the world.",
      "She quit smoking for the sake of her health."
    ]
  },
  {
    "id": 7,
    "image": "./images/words/responsibility.jpg",
    "word": "Responsibility",
    "translation": "Обов'язок",
    "example": [
      "Taking care of a pet is a big responsibility.",
      "With freedom comes responsibility."
    ]
  },
  {
    "id": 8,
    "image": "./images/words/salesperson.jpg",
    "word": "Salesperson",
    "translation": "Продавець",
    "example": [
      " ",
      "She works as a salesperson in a clothing store."
    ]
  },
  {
    "id": 9,
    "image": "./images/words/self_disciplined.jpg",
    "word": "Self-disciplined",
    "translation": "Дисциплінований",
    "example": [
      "She's self-disciplined and sticks to her schedule.",
      "Self-disciplined individuals are more likely to achieve their goals."
    ]
  },
  {
    "id": 10,
    "image": "./images/words/shift_work.jpg",
    "word": "Shift work",
    "translation": "Позмінна робота",
    "example": [
      "Working shift work can be tiring.",
      "Many nurses have to do shift work to cover all hours."
    ]
  },
  {
    "id": 11,
    "image": "./images/words/sick_leave.jpg",
    "word": "Sick leave",
    "translation": "Лікарняний",
    "example": [
      "She took sick leave to recover from the flu.",
      "Employees are entitled to sick leave if they're unwell."
    ]
  },
  {
    "id": 12,
    "image": "./images/words/stand_out.jpg",
    "word": "Stand out",
    "translation": "Виділятися",
    "example": [
      "His bright red shirt made him stand out in the crowd.",
      "To succeed, you need to find a way to stand out."
    ]
  },
  {
    "id": 14,
    "image": "./images/words/wage.jpg",
    "word": "Wage",
    "translation": "Заробітня плата",
    "example": [
      "She received her monthly wage on the last day of the month.",
      "Minimum wage varies from country to country."
    ]
  }
];
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