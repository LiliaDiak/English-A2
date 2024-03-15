 let words = [
  {
    "id": 1,
    "image": "./images/words/attractive.jpg",
    "word": "Attractive",
    "translation": "Привабливий",
    "example": [
      "She found the new neighbor very attractive.",
      "The painting made the room look more attractive."
    ]
  },
  {
    "id": 2,
    "image": "./images/words/pretty.jpg",
    "word": "Pretty",
    "translation": "Симпатична",
    "example": [
      "She wore a pretty dress to the party.",
      "The garden was filled with pretty flowers."
    ]
  },
  {
    "id": 3,
    "image": "./images/words/handsome.jpg",
    "word": "Handsome",
    "translation": "Красивий",
    "example": [
      "He was a handsome man with a charming smile.",
      "The actor was considered very handsome by his fans."
    ]
  },
  {
    "id": 4,
    "image": "./images/words/gorgeous.jpg",
    "word": "Gorgeous",
    "translation": "Дуже красивий",
    "example": [
      "She wore a gorgeous gown to the gala.",
      "The sunset painted the sky in gorgeous hues."
    ]
  },
  {
    "id": 5,
    "image": "./images/words/stunning.jpg",
    "word": "Stunning",
    "translation": "Приголомшливий",
    "example": [
      "She looked stunning in her wedding dress.",
      "The view from the mountaintop was stunning."
    ]
  },
  {
    "id": 6,
    "image": "./images/words/likable.jpg",
    "word": "Likable",
    "translation": "Симпатичний",
    "example": [
      "He was a likable person with a great sense of humor.",
      "The puppy was so likable that everyone wanted to pet it."
    ]
  },
  {
    "id": 7,
    "image": "./images/words/tidy.jpg",
    "word": "Tidy",
    "translation": "Охайний",
    "example": [
      "She kept her desk tidy with everything in its place.",
      "The tidy appearance of the room impressed the guests."
    ]
  },
  {
    "id": 8,
    "image": "./images/words/stylish.jpg",
    "word": "Stylish",
    "translation": "Стильний",
    "example": [
      "She always dressed in a stylish manner.",
      "The apartment had a stylish modern design."
    ]
  },
  {
    "id": 9,
    "image": "./images/words/neat.jpg",
    "word": "Neat",
    "translation": "Акуратний",
    "example": [
      "He had a neat appearance with well-groomed hair.",
      "She kept her room neat and organized."
    ]
  },
  {
    "id": 10,
    "image": "./images/words/sophisticated.jpg",
    "word": "Sophisticated",
    "translation": "Витончений",
    "example": [
      "She had a sophisticated taste in art and literature.",
      "The restaurant had a sophisticated ambiance."
    ]
  },
  {
    "id": 11,
    "image": "./images/words/well_dressed.jpg",
    "word": "Well-dressed",
    "translation": "Добре одягнений",
    "example": [
      "He always appeared well-dressed for work.",
      "She felt confident when she was well-dressed."
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