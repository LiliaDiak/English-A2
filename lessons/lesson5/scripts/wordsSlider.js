const words = [
  {
    "id": 188,
    "image": "./images/words/kettle.jpg",
    "word": "Kettle",
    "translation": "Чайник",
    "example": [
      "Fill the kettle with water and turn it on to make tea.",
      "The whistle on the kettle signals when the water is boiling."
    ]
  },
  {
    "id": 189,
    "image": "./images/words/grater.jpg",
    "word": "Grater",
    "translation": "Терка",
    "example": [
      "Use the grater to grate cheese for your pizza.",
      "A grater can also be used to shred vegetables for salads."
    ]
  },
  {
    "id": 190,
    "image": "./images/words/to_spread.jpg",
    "word": "To spread",
    "translation": "Розподіляти, мастити",
    "example": [
      "Use a knife to spread butter on your toast.",
      "She likes to spread jam on her pancakes."
    ]
  },
  {
    "id": 191,
    "image": "./images/words/fat.jpg",
    "word": "Fat",
    "translation": "Жир",
    "example": [
      "Avoid too much fat in your diet for a healthy lifestyle.",
      "Cooking with olive oil is a healthier alternative to animal fat."
    ]
  },
  {
    "id": 192,
    "image": "./images/words/peeler.jpg",
    "word": "Peeler",
    "translation": "Чистачка",
    "example": [
      "A peeler is handy for removing the skin from fruits and vegetables.",
      "Use a peeler to make thin strips of carrot for salads."
    ]
  },
  {
    "id": 193,
    "image": "./images/words/ashtray.jpg",
    "word": "Ashtray",
    "translation": "Попільничка",
    "example": [
      "Smokers use an ashtray to dispose of cigarette ash and butts.",
      "Place the ashtray outside during parties to keep the house clean."
    ]
  },
  {
    "id": 194,
    "image": "./images/words/pot.jpg",
    "word": "Pot",
    "translation": "Каструля",
    "example": [
      "Boil water in a pot for pasta or rice.",
      "Use a pot to make soup or stew on a cold day."
    ]
  },
  {
    "id": 195,
    "image": "./images/words/bowl.jpg",
    "word": "Bowl",
    "translation": "Миска",
    "example": [
      "Serve cereal in a bowl for breakfast.",
      "Use a bowl for mixing ingredients when baking."
    ]
  },
  {
    "id": 196,
    "image": "./images/words/scissors.jpg",
    "word": "Scissors",
    "translation": "Ножиці",
    "example": [
      "Scissors are useful for cutting paper and wrapping gifts.",
      "Keep a pair of scissors in the kitchen for opening packages."
    ]
  },
  {
    "id": 197,
    "image": "./images/words/pinch.jpg",
    "word": "Pinch",
    "translation": "Щіпка",
    "example": [
      "Add a pinch of salt to enhance the flavor of your dish.",
      "She only used a pinch of sugar in her coffee."
    ]
  },
  {
    "id": 198,
    "image": "./images/words/foil.jpg",
    "word": "Foil",
    "translation": "Фольга",
    "example": [
      "Cover leftovers with foil before placing them in the fridge.",
      "Foil can be used for wrapping food before grilling."
    ]
  },
  {
    "id": 199,
    "image": "./images/words/frying_pan.jpg",
    "word": "Frying pan",
    "translation": "Сковорода",
    "example": [
      "Cook eggs in a frying pan for a quick breakfast.",
      "A non-stick frying pan is easy to clean after cooking."
    ]
  },
  {
    "id": 200,
    "image": "./images/words/cook_something_up.jpg",
    "word": "Cook something up",
    "translation": "Організувати щось",
    "example": [
      "Let's cook up a plan for the weekend.",
      "They decided to cook something up for the upcoming celebration."
    ]
  },
  {
    "id": 201,
    "image": "./images/words/grill_someone.jpg",
    "word": "Grill someone",
    "translation": "Допитувати чи інтенсивно розпитувати людину",
    "example": [
      "The detective began to grill the suspect for more information.",
      "She decided to grill her friend about the surprise party."
    ]
  },
  {
    "id": 202,
    "image": "./images/words/butter_someone_up.jpg",
    "word": "Butter someone up",
    "translation": "Хвалити",
    "example": [
      "He tried to butter her up with compliments before asking for a favor.",
      "She didn't like when people tried to butter her up just to get something."
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