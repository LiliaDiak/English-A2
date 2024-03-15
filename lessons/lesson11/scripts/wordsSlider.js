 let words = [
  {
    "id": 247,
    "word": "Condition",
    "image": "./images/words/Condition.jpg",
    "translation": "Стан",
    "example": [
      "The road conditions were poor due to heavy rain.",
      "We should check the weather conditions before going out."
    ]
  },
  {
    "id": 248,
    "word": "Blizzard",
    "image": "./images/words/Blizzard.jpg",
    "translation": "Снігопад",
    "example": [
      "During the blizzard, it's best to stay indoors.",
      "The blizzard covered everything in a thick layer of snow."
    ]
  },
  {
    "id": 249,
    "word": "Thunderstorm",
    "image": "./images/words/Thunderstorm.jpg",
    "translation": "Гроза",
    "example": [
      "We could hear the thunderstorm approaching in the distance.",
      "It's not safe to be outside during a thunderstorm."
    ]
  },
  {
    "id": 250,
    "word": "Drizzle",
    "image": "./images/words/Drizzle.jpg",
    "translation": "Мряка",
    "example": [
      "The weather forecast predicts drizzle for the afternoon.",
      "Don't forget your umbrella; it might drizzle later."
    ]
  },
  {
    "id": 252,
    "word": "Lightning",
    "image": "./images/words/Lightning.jpg",
    "translation": "Блискавка",
    "example": [
      "We saw a flash of lightning followed by thunder.",
      "Lightning struck the tall tree in the park."
    ]
  },
  {
    "id": 253,
    "word": "Rise",
    "image": "./images/words/Rise.jpg",
    "translation": "Підніматися",
    "example": [
      "The sun will rise in the east.",
      "Temperatures are expected to rise over the weekend."
    ]
  },
  {
    "id": 254,
    "word": "Freezing",
    "image": "./images/words/Freezing.jpg",
    "translation": "Мороз",
    "example": [
      "The freezing temperatures made it difficult to go outside.",
      "The lake was frozen solid due to the freezing weather."
    ]
  },
  {
    "id": 255,
    "word": "Hail",
    "image": "./images/words/Hail.jpg",
    "translation": "Град",
    "example": [
      "The hailstorm damaged the crops in the field.",
      "Large hailstones fell from the sky during the storm."
    ]
  },
  {
    "id": 256,
    "word": "Snowflake",
    "image": "./images/words/Snowflake.jpg",
    "translation": "Сніжинка",
    "example": [
      "Children caught snowflakes on their tongues during the snowfall.",
      "Each snowflake is unique in its shape and pattern."
    ]
  },
  {
    "id": 257,
    "word": "Forecast",
    "image": "./images/words/Forecast.jpg",
    "translation": "Прогноз",
    "example": [
      "The weather forecast predicts sunny skies for tomorrow.",
      "I always check the forecast before planning outdoor activities."
    ]
  },
  {
    "id": 258,
    "word": "Unpredictable",
    "image": "./images/words/Unpredictable.jpg",
    "translation": "Непередбачуваний",
    "example": [
      "Weather in the mountains can be unpredictable.",
      "Her mood is unpredictable; you never know how she'll react."
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