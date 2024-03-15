 let words = [
  {
    "id": 1,
    "image": "./images/words/snub.jpg",
    "word": "Snub",
    "translation": "Курносий",
    "example": [
      "She gave him a snub because he arrived late to the party.",
      "He felt hurt by her snub at the event."
    ]
  },
  {
    "id": 2,
    "image": "./images/words/hairstyle.jpg",
    "word": "Hairstyle",
    "translation": "Зачіска",
    "example": [
      "She's trying a new hairstyle for the party tonight.",
      "He went to the salon to get his hairstyle updated."
    ]
  },
  {
    "id": 3,
    "image": "./images/words/haircut.jpg",
    "word": "Haircut",
    "translation": "Стрижка",
    "example": [
      "He needs a haircut before his job interview.",
      "She got a fresh haircut for her birthday celebration."
    ]
  },
  {
    "id": 4,
    "image": "./images/words/a_fringe.jpg",
    "word": "Fringe / Bangs",
    "translation": "Чолка",
    "example": [
      "She decided to get bangs to change her look.",
      "He trimmed his fringe to keep it out of his eyes."
    ]
  },
  {
    "id": 5,
    "image": "./images/words/a_ponytail.jpg",
    "word": "Ponytail",
    "translation": "Хвіст",
    "example": [
      "She tied her hair into a high ponytail for the gym.",
      "He prefers to wear a ponytail when he goes jogging."
    ]
  },
  {
    "id": 6,
    "image": "./images/words/a_braid.jpg",
    "word": "Braid",
    "translation": "Коса",
    "example": [
      "She braided her hair for a bohemian look.",
      "He admired her intricate braid."
    ]
  },
  {
    "id": 7,
    "image": "./images/words/a_topknot.jpg",
    "word": "Topknot",
    "translation": "Волосся, зібране в пучок",
    "example": [
      "She put her hair in a topknot to keep it off her neck.",
      "He prefers a messy topknot for a casual look."
    ]
  },
  {
    "id": 8,
    "image": "./images/words/loose_hair.jpg",
    "word": "Loose hair",
    "translation": "Розпущене волосся",
    "example": [
      "She left her loose hair flowing freely in the wind.",
      "He brushed his loose hair before going out."
    ]
  },
  {
    "id": 9,
    "image": "./images/words/straight_wavy_curly_hair.jpg",
    "word": "Straight, wavy, or curly hair",
    "translation": "Прямі, хвилясті або кучеряве волосся",
    "example": [
      "Her straight hair required less maintenance.",
      "He loved her wavy hair that cascaded down her back."
    ]
  },
  {
    "id": 10,
    "image": "./images/words/to_lose_hair.jpg",
    "word": "To lose hair",
    "translation": "Втрачати волосся",
    "example": [
      "He started to lose hair due to stress.",
      "She worried about losing hair as she aged."
    ]
  },
  {
    "id": 11,
    "image": "./images/words/bald.jpg",
    "word": "Bald",
    "translation": "Лисий",
    "example": [
      "He shaved his head completely bald.",
      "She found bald men attractive."
    ]
  },
  {
    "id": 12,
    "image": "./images/words/ginger.jpg",
    "word": "Ginger",
    "translation": "Рудий",
    "example": [
      "Her ginger hair stood out in a crowd.",
      "He dyed his hair ginger for Halloween."
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