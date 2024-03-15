const words = [
  {
    "id": 147,
    "image": "./images/words/hard_hearted.jpg",
    "word": "Hard-hearted",
    "translation": "Черствий",
    "example": [
      "He was hard-hearted and didn't show any sympathy.",
      "Being hard-hearted can make it difficult to connect with others emotionally."
    ]
  },
  {
    "id": 148,
    "image": "./images/words/helpful.jpg",
    "word": "Helpful",
    "translation": "Готовий допомогти",
    "example": [
      "A helpful neighbor assisted with carrying groceries.",
      "Being helpful makes a positive impact on the community."
    ]
  },
  {
    "id": 149,
    "image": "./images/words/open_minded.jpg",
    "word": "Open-minded",
    "translation": "Неупереджений, з широким світоглядом",
    "example": [
      "Being open-minded allows for accepting diverse perspectives.",
      "An open-minded approach fosters creativity and understanding."
    ]
  },
  {
    "id": 150,
    "image": "./images/words/party_animal.jpg",
    "word": "Party animal",
    "translation": "Тусівник",
    "example": [
      "She's a real party animal and loves social gatherings.",
      "Being a party animal means enjoying lively events and celebrations."
    ]
  },
  {
    "id": 151,
    "image": "./images/words/pleasant.jpg",
    "word": "Pleasant",
    "translation": "Приємний",
    "example": [
      "A pleasant smile can brighten someone's day.",
      "The weather was pleasant, with a gentle breeze."
    ]
  },
  {
    "id": 152,
    "image": "./images/words/polite.jpg",
    "word": "Polite",
    "translation": "Ввічливий",
    "example": [
      "It's important to be polite and say 'please' and 'thank you'.",
      "Polite communication contributes to positive interactions."
    ]
  },
  {
    "id": 153,
    "image": "./images/words/reliable.jpg",
    "word": "Reliable",
    "translation": "Надійний",
    "example": [
      "A reliable friend is always there when you need support.",
      "Being reliable builds trust in personal and professional relationships."
    ]
  },
  {
    "id": 154,
    "image": "./images/words/reserved.jpg",
    "word": "Reserved",
    "translation": "Стриманий",
    "example": [
      "He is often reserved and doesn't share his feelings easily.",
      "Being reserved doesn't mean lacking warmth; it's just a personal style."
    ]
  },
  {
    "id": 155,
    "image": "./images/words/rude.jpg",
    "word": "Rude",
    "translation": "Грубий",
    "example": [
      "Interrupting others while they speak is considered rude.",
      "Being rude can create tension in social situations."
    ]
  },
  {
    "id": 156,
    "image": "./images/words/sympathetic.jpg",
    "word": "Sympathetic",
    "translation": "Співчутливий",
    "example": [
      "A sympathetic friend listens and understands during tough times.",
      "Being sympathetic means showing compassion and support."
    ]
  },
  {
    "id": 157,
    "image": "./images/words/tolerant.jpg",
    "word": "Tolerant",
    "translation": "Толерантний",
    "example": [
      " ",
      "Being tolerant promotes harmony and understanding."
    ]
  },
  {
    "id": 158,
    "image": "./images/words/wise.jpg",
    "word": "Wise",
    "translation": "Мудрий",
    "example": [
      "Seeking advice from wise individuals can lead to better decisions.",
      "Being wise involves making thoughtful and informed choices."
    ]
  },
  {
    "id": 159,
    "image": "./images/words/workaholic.jpg",
    "word": "Workaholic",
    "translation": "Трудоголік",
    "example": [
      "A workaholic often spends long hours at the office.",
      "Balancing work and personal life is important to avoid becoming a workaholic."
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