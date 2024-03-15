const selections1 = [
    {
        "textStart": "Philip is applying for a job as an activity leader.",
        "options": [
            "True",
            "False",
            ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "Philip worked as a teacher in a school.",
        "options":  [
            "True",
            "False",
            ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "Philip was responsible for communicating to team members.",
        "options": [
            "True",
            "False",
            ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "Philip quit the team because he did not get enough praise and encouragement.",
        "options":  [
            "True",
            "False",
            ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "Philip worked long hours when he worked at a factory.",
        "options": [
            "True",
            "False",
            ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "Philip thought the work at the factory was interesting.",
        "options":  [
            "True",
            "False",
            ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "Philip's co-workers at the factory helped him a lot.",
        "options":  [
            "True",
            "False",
            ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "Some of Phillip's co-workers at the factory were often complaining to the boss.",
        "options":  [
            "True",
            "False",
            ],
        "correct": "2",
        "textEnd": ""
    },
]


const practiceForm = document.querySelector('.practice1__form');
const practice1 = (mass) => {
    for (let item of mass) {
        practiceForm.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice1__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
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