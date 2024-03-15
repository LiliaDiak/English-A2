 let words = [
  {
    "id": 259,
    "word": "To blow",
    "image": "./images/words/To_blow.jpg",
    "translation": "Дмухати",
    "example": [
      "The wind began to blow harder as the storm approached.",
      "She blew out the candles on her birthday cake."
    ]
  },
  {
    "id": 260,
    "word": "Raindrop",
    "image": "./images/words/Raindrop.jpg",
    "translation": "Крапля дощу",
    "example": [
      "Raindrops fell softly on the roof.",
      "He felt a raindrop on his nose."
    ]
  },
  {
    "id": 261,
    "word": "To pour",
    "image": "./images/words/To_pour.jpg",
    "translation": "Лити (про дощ)",
    "example": [
      "It started to pour just as we left the house.",
      "We got completely soaked when it poured."
    ]
  },
  {
    "id": 262,
    "word": "Severe",
    "image": "./images/words/Severe.jpg",
    "translation": "Суворий",
    "example": [
      "The storm warning indicated severe weather conditions.",
      "She suffered from severe sunburn after spending too much time outside."
    ]
  },
  {
    "id": 263,
    "word": "Awful",
    "image": "./images/words/Awful.jpg",
    "translation": "Жахливий",
    "example": [
      "The weather today is awful; it's raining heavily.",
      "He felt awful after eating too much junk food."
    ]
  },
  {
    "id": 264,
    "word": "Mist",
    "image": "./images/words/Mist.jpg",
    "translation": "Туман",
    "example": [
      "The valley was covered in mist in the early morning.",
      "Be careful driving in the mist; visibility is reduced."
    ]
  },
  {
    "id": 265,
    "word": "To increase",
    "image": "./images/words/To_increase.jpg",
    "translation": "Збільшувати",
    "example": [
      "The wind speed will increase as the day progresses.",
      "Prices are expected to increase next month."
    ]
  },
  {
    "id": 266,
    "word": "Shade",
    "image": "./images/words/Shade.jpg",
    "translation": "Тінь",
    "example": [
      "They rested in the shade of a large tree.",
      "She wore sunglasses to protect her eyes from the sun's glare."
    ]
  },
  {
    "id": 267,
    "word": "Rainbow",
    "image": "./images/words/Rainbow.jpg",
    "translation": "Веселка",
    "example": [
      "After the rain, a beautiful rainbow appeared in the sky.",
      "Children love to chase rainbows after a storm."
    ]
  },
  {
    "id": 268,
    "word": "To be covered in",
    "image": "./images/words/To_be_covered_in.jpg",
    "translation": "Бути покритим чимось",
    "example": [
      "The car was covered in mud after driving through the dirt road.",
      "She was covered in paint after helping with the art project."
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