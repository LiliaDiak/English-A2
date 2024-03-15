const words = [
  {
    "id": 175,
    "image": "./images/words/to_grate.jpg",
    "word": "To grate",
    "translation": "Терти",
    "example": [
      "I use a grater to grate cheese for my pasta.",
      "Can you help me grate some carrots for the salad?"
    ]
  },
  {
    "id": 176,
    "image": "./images/words/to_peel.jpg",
    "word": "To peel",
    "translation": "Чистити",
    "example": [
      "To peel an orange, start at the top and work your way down.",
      "She learned to peel potatoes before cooking them."
    ]
  },
  {
    "id": 177,
    "image": "./images/words/dishes.jpg",
    "word": "Dishes",
    "translation": "Посуд",
    "example": [
      "After dinner, we wash the dishes together.",
      "Dirty dishes should be placed in the sink."
    ]
  },
  {
    "id": 178,
    "image": "./images/words/to_taste.jpg",
    "word": "To taste",
    "translation": "Смакувати",
    "example": [
      "Before serving, always taste the food to check the seasoning.",
      "She asked her friend to taste the soup and give feedback."
    ]
  },
  {
    "id": 179,
    "image": "./images/words/to_fry.jpg",
    "word": "To fry",
    "translation": "Смажити",
    "example": [
      "You can fry eggs in a pan for breakfast.",
      "To make crispy chicken, you need to fry it in hot oil."
    ]
  },
  {
    "id": 180,
    "image": "./images/words/oven.jpg",
    "word": "Oven",
    "translation": "Піч",
    "example": [
      "An oven is used for baking and roasting food.",
      "The cake is in the oven, and it will be ready soon."
    ]
  },
  {
    "id": 181,
    "image": "./images/words/sink.jpg",
    "word": "Sink",
    "translation": "Мийка",
    "example": [
      "After washing dishes, don't forget to clean the sink.",
      "The water from the leaky faucet filled the sink."
    ]
  },
  {
    "id": 182,
    "image": "./images/words/plate.jpg",
    "word": "Plate",
    "translation": "Тарілка",
    "example": [
      "Put the hot soup on the plate before serving.",
      "Every family member has their own plate at the dinner table."
    ]
  },
  {
    "id": 183,
    "image": "./images/words/to_boil.jpg",
    "word": "To boil",
    "translation": "Кип'ятити",
    "example": [
      "Boil water before making tea or coffee.",
      "To cook pasta, you need to boil it in a pot."
    ]
  },
  {
    "id": 184,
    "image": "./images/words/to_bake.jpg",
    "word": "To bake",
    "translation": "Випікати",
    "example": [
      "She loves to bake cookies on the weekends.",
      "What temperature should I set to bake the cake in the oven?"
    ]
  },
  {
    "id": 185,
    "image": "./images/words/to_pour.jpg",
    "word": "To pour",
    "translation": "Налити",
    "example": [
      "Pour the milk into a glass for your cereal.",
      "Can you pour some juice for me, please?"
    ]
  },
  {
    "id": 186,
    "image": "./images/words/to_whip.jpg",
    "word": "To whip",
    "translation": "Збивати",
    "example": [
      "Use an electric mixer to whip cream until it's fluffy.",
      "To make a smooth batter, you need to whip the ingredients together."
    ]
  },
  {
    "id": 187,
    "image": "./images/words/to_steam.jpg",
    "word": "To steam",
    "translation": "Парити",
    "example": [
      "Steaming vegetables helps retain their nutrients.",
      "She decided to steam fish for a healthy dinner."
    ]
  }
]

const wrap = document.querySelector('.wrap');
const putWords = (mass) => {
    for (let word of mass) {
        wrap.innerHTML += `<div class="card">
        <div class="front">
          <img class="front__img" width="390px" height="420px" src="./images/works/${word.word}.jpg" alt="">
          <p class="font__word">${word.word}</p>
        </div>
        <div class="back">
        <img width="390px" height="420px" src="./images/works/${word.word}.jpg" alt="">
          <h3 class="back__trans">${word.translation}</h3>
            <span>${word?.example[0]}</span>
            <span>${word?.example[1]}</span>
        </div>
      </div>`
    }
}

putWords(words);
$('.wrap').slick();