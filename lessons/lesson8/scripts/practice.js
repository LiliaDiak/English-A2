const selections1 = [
    {
        "textStart": "In which text did the person go there for a special occasion?",
        "options": [
            "1", "2", "3", "4"
            ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "In which text did the person visit an Indian restaurant?",
        "options":  [
            "1", "2", "3", "4"
            ],
        "correct": "3",
        "textEnd": ""
    },
    {
        "textStart": "In which text did the person eat pizza?",
        "options": [
            "1", "2", "3", "4"
            ],
        "correct": "4",
        "textEnd": ""
    },
    {
        "textStart": "In which text did the person eat fast food?",
        "options":  [
            "1", "2", "3", "4"
            ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "In which text did someone eat seafood?",
        "options": [
            "1", "2", "3", "4"
            ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "In which text did the person talk about the atmosphere of the restaurant?",
        "options":  [
            "1", "2", "3", "4"
            ],
        "correct": "3",
        "textEnd": ""
    },
    {
        "textStart": "In which text did someone eat a very hot dish?",
        "options":  [
            "1", "2", "3", "4"
            ],
        "correct": "3",
        "textEnd": ""
    },
    {
        "textStart": "In which text did the person have a vegetarian meal?",
        "options":  [
            "1", "2", "3", "4"
            ],
        "correct": "4",
        "textEnd": ""
    },
]


const practiceForm = document.querySelector('.practice__form');
const practice1 = (mass) => {
    for (let item of mass) {
        practiceForm.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice1__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[2]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[3]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practiceForm.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers1()">`
}
practice1(selections1);

const checkAnswers1 = () => {
    const mass = [...selections1];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice1__select');
    for (let select = 0; select < selections1.length; select++) {
        if (selects[select].options.selectedIndex == mass[select].correct) {
            countCorrect++;
            selects[select].style.border = 'solid 3px green';
        }
        else {
            countINcorrect++;
            selects[select].style.border = 'solid 3px red';

        }


    }
}