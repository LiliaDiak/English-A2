 let words = 
 [
   {
     "id": 1,
     "image": "./images/words/feature.jpg",
     "word": "Feature",
     "translation": "Риса",
     "example": [
       "Her prominent feature was her bright smile.",
       "The magazine highlighted her unique facial features."
     ]
   },
   {
     "id": 2,
     "image": "./images/words/complexion.jpg",
     "word": "Complexion",
     "translation": "Колір обличчя",
     "example": [
       "She had a fair complexion with rosy cheeks.",
       "His dark complexion indicated his Mediterranean heritage."
     ]
   },
   {
     "id": 3,
     "image": "./images/words/wrinkles.jpg",
     "word": "Wrinkles",
     "translation": "Зморшки",
     "example": [
       "Her wrinkles showed the signs of a life well-lived.",
       "He used anti-wrinkle cream to reduce the appearance of wrinkles."
     ]
   },
   {
     "id": 4,
     "image": "./images/words/freckles.jpg",
     "word": "Freckles",
     "translation": "Веснянки",
     "example": [
       "She had freckles scattered across her nose.",
       "The child's face was covered in freckles from playing in the sun."
     ]
   },
   {
     "id": 5,
     "image": "./images/words/stubble.jpg",
     "word": "Stubble",
     "translation": "Щетина",
     "example": [
       "He had a five o'clock shadow of stubble on his chin.",
       "After a few days without shaving, stubble began to appear on his face."
     ]
   },
   {
     "id": 6,
     "image": "./images/words/clean_shaven.jpg",
     "word": "Clean-shaven",
     "translation": "Гладко поголений",
     "example": [
       "He preferred to keep his face clean-shaven for work.",
       "She found clean-shaven men more attractive."
     ]
   },
   {
     "id": 7,
     "image": "./images/words/skin_tone.jpg",
     "word": "Skin tone",
     "translation": "Колір шкіри",
     "example": [
       "Different cultures have varying preferences for skin tone.",
       "She applied sunscreen to protect her fair skin tone from the sun."
     ]
   },
   {
     "id": 8,
     "image": "./images/words/smooth.jpg",
     "word": "Smooth",
     "translation": "Гладка",
     "example": [
       "Her skin felt smooth to the touch.",
       "The lotion helped keep his hands smooth despite the harsh weather."
     ]
   },
   {
     "id": 9,
     "image": "./images/words/tanned.jpg",
     "word": "Tanned",
     "translation": "Засмагла",
     "example": [
       "She spent the summer getting tanned at the beach.",
       "His tanned skin hinted at his love for outdoor activities."
     ]
   },
   {
     "id": 10,
     "image": "./images/words/pale_skinned.jpg",
     "word": "Pale-skinned",
     "translation": "З блідою шкірою",
     "example": [
       "People with pale skin should take extra care in the sun.",
       "She always looked pale-skinned during the winter months."
     ]
   },
   {
     "id": 11,
     "image": "./images/words/scar.jpg",
     "word": "Scar",
     "translation": "Шрам",
     "example": [
       "The scar on his cheek told a story of a childhood accident.",
       "She covered the scar on her arm with a bandage."
     ]
   },
   {
     "id": 12,
     "image": "./images/words/dark_circles.jpg",
     "word": "Dark circles",
     "translation": "Темні кола під очима",
     "example": [
       "She had dark circles under her eyes from lack of sleep.",
       "The concealer helped hide the dark circles under his eyes."
     ]
   },
   {
     "id": 13,
     "image": "./images/words/sharp_eyed.jpg",
     "word": "Sharp-eyed",
     "translation": "Людина з гострим зором",
     "example": [
       "As a detective, she was known for being sharp-eyed.",
       "The sharp-eyed birdwatcher spotted the rare species."
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