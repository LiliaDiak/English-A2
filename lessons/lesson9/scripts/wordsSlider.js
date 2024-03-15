const words = [
  {
    "id": 232,
    "image": "./images/words/accommodation.jpg",
    "word": "Accommodation",
    "translation": "Житло",
    "example": [
      "We need to find accommodation for our trip.",
      "There are various types of accommodation available, such as hotels, hostels, and guesthouses."
    ]
  },
  {
    "id": 233,
    "image": "./images/words/adventure.jpg",
    "word": "Adventure",
    "translation": "Пригода",
    "example": [
      "Going on an adventure can be exciting and fun.",
      "They decided to go on an adventure to explore the jungle."
    ]
  },
  {
    "id": 234,
    "image": "./images/words/arrive.jpg",
    "word": "Arrive",
    "translation": "Прибувати",
    "example": [
      "We'll arrive at our destination in the evening.",
      "The train is scheduled to arrive at the station at 5 PM."
    ]
  },
  {
    "id": 235,
    "image": "./images/words/available.jpg",
    "word": "Available",
    "translation": "Наявний",
    "example": [
      "Is there any accommodation available for tonight?",
      "There are still tickets available for the concert."
    ]
  },
  {
    "id": 236,
    "image": "./images/words/backpack.jpg",
    "word": "Backpack",
    "translation": "Рюкзак",
    "example": [
      "Don't forget to pack your backpack for the hike.",
      "He always carries his essentials in his backpack."
    ]
  },
  {
    "id": 237,
    "image": "./images/words/bay.jpg",
    "word": "Bay",
    "translation": "Бухта",
    "example": [
      "The boat sailed into the calm bay.",
      "We had a picnic by the bay and enjoyed the view."
    ]
  },
  {
    "id": 238,
    "image": "./images/words/book.jpg",
    "word": "Book",
    "translation": "Бронювати",
    "example": [
      "We need to book accommodation for our trip.",
      "Make sure to book your tickets in advance."
    ]
  },
  {
    "id": 239,
    "image": "./images/words/ampsite.jpg",
    "word": "Campsite",
    "translation": "Кемпінг",
    "example": [
      "We found a nice campsite near the lake.",
      "The campsite has facilities for tents and caravans."
    ]
  },
  {
    "id": 240,
    "image": "./images/words/caravan.jpg",
    "word": "Caravan",
    "translation": "Будинок на колесах",
    "example": [
      "They traveled across the country in their caravan.",
      "We rented a caravan for our road trip."
    ]
  },
  {
    "id": 241,
    "image": "./images/words/cost.jpg",
    "word": "Cost",
    "translation": "Коштувати",
    "example": [
      "How much does accommodation cost per night?",
      "The total cost of the trip includes transportation, accommodation, and meals."
    ]
  },
  {
    "id": 242,
    "image": "./images/words/customs.jpg",
    "word": "Customs",
    "translation": "Митниця",
    "example": [
      "We need to go through customs before boarding the plane.",
      "Declare any items you have at customs."
    ]
  },
  {
    "id": 243,
    "image": "./images/words/depart.jpg",
    "word": "Depart",
    "translation": "Вирушати",
    "example": [
      "The train will depart from platform 3.",
      "Our flight is scheduled to depart at 8 AM."
    ]
  },
  {
    "id": 244,
    "image": "./images/words/destination.jpg",
    "word": "Destination",
    "translation": "Пункт призначення",
    "example": [
      "Our destination is a small village in the mountains.",
      "We finally reached our destination after a long journey."
    ]
  },
  {
    "id": 245,
    "image": "./images/words/equ.jpg",
    "word": "Equipment",
    "translation": "Спорядження",
    "example": [
      "Make sure to bring all the necessary equipment for camping.",
      "The rental shop provides equipment for various outdoor activities."
    ]
  },
  {
    "id": 246,
    "image": "./images/words/ferry.jpg",
    "word": "Ferry",
    "translation": "Паром",
    "example": [
      "We took a ferry to cross the river.",
      "The ferry ride offers beautiful views of the coastline."
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