const words = [
  {
    "id": 218,
    "image": "./images/words/bill_check.jpg",
    "word": "Bill/Check",
    "translation": "Рахунок",
    "example": [
      "After finishing your meal, ask for the bill at the restaurant.",
      "Make sure to check the bill for any mistakes before paying."
    ]
  },
  {
    "id": 219,
    "image": "./images/words/tip.jpg",
    "word": "Tip",
    "translation": "Чайові",
    "example": [
      "It's customary to leave a tip for good service in restaurants.",
      "How much tip should we leave for the waiter?"
    ]
  },
  {
    "id": 220,
    "image": "./images/words/takeout.jpg",
    "word": "Takeout",
    "translation": "Їжа на виніс",
    "example": [
      "When you're too busy to cook, you can order takeout from a restaurant.",
      "Let's get some takeout and have a picnic in the park."
    ]
  },
  {
    "id": 221,
    "image": "./images/words/main_course.jpg",
    "word": "Main course",
    "translation": "Головна страва",
    "example": [
      "For the main course, I'll have the grilled chicken.",
      "The restaurant offers a variety of options for the main course."
    ]
  },
  {
    "id": 222,
    "image": "./images/words/pay_the_bill.jpg",
    "word": "Pay the bill",
    "translation": "Сплатити рахунок",
    "example": [
      "Make sure to pay the bill before leaving the restaurant.",
      "She forgot to pay the bill and had to return to the restaurant."
    ]
  },
  {
    "id": 223,
    "image": "./images/words/appetizers.jpg",
    "word": "Appetizers",
    "translation": "Закуски",
    "example": [
      "We ordered some appetizers to share before the main course.",
      "The restaurant offers a variety of appetizers to start your meal."
    ]
  },
  {
    "id": 224,
    "image": "./images/words/tray.jpg",
    "word": "Tray",
    "translation": "Піднос",
    "example": [
      "Use a tray to carry multiple dishes to the table.",
      "The waiter brought our drinks on a tray."
    ]
  },
  {
    "id": 225,
    "image": "./images/words/cuisine.jpg",
    "word": "Cuisine",
    "translation": "Кухня (страви певного регіону або країни)",
    "example": [
      "Italian cuisine is known for its pasta and pizza.",
      "We're going to try some authentic Thai cuisine tonight."
    ]
  },
  {
    "id": 226,
    "image": "./images/words/napkin.jpg",
    "word": "Napkin",
    "translation": "Серветка",
    "example": [
      "Place a napkin on your lap before eating.",
      "Use a napkin to wipe your mouth after eating."
    ]
  },
  {
    "id": 227,
    "image": "./images/words/cutlery.jpg",
    "word": "Cutlery",
    "translation": "Посуд (ножі, виделки, ложки)",
    "example": [
      "Make sure the cutlery is clean before setting the table.",
      "The restaurant provides high-quality cutlery for its guests."
    ]
  },
  {
    "id": 228,
    "image": "./images/words/order.jpg",
    "word": "Order",
    "translation": "Замовляти",
    "example": [
      "We're ready to order our food now.",
      "Don't forget to order dessert after the main course."
    ]
  },
  {
    "id": 229,
    "image": "./images/words/reserved.jpg",
    "word": "Reserved",
    "translation": "Зарезервований",
    "example": [
      "The table by the window is reserved for us.",
      "They reserved a private room for the special occasion."
    ]
  },
  {
    "id": 230,
    "image": "./images/words/book_a_table.jpg",
    "word": "Book a table",
    "translation": "Забронювати столик",
    "example": [
      "We should book a table in advance for dinner tonight.",
      "It's recommended to book a table during peak hours."
    ]
  },
  {
    "id": 231,
    "image": "./images/words/enjoy_your_meal.jpg",
    "word": "Enjoy your meal",
    "translation": "Смачного!",
    "example": [
      "As the waiter brings the food, you can say, 'Enjoy your meal!'",
      "He wished the guests 'Enjoy your meal!' before leaving the table."
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