const selections1 = [

    {
        "textStart": "1. She has worked as a receptionist at the advertising agency “Big Ad”",
        "options": [
            "True", "False"
        ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "2. Maria Martinaz is applying for a job of a fashion designer",
        "options": [
            "True", "False"
        ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "3. She is working as a director at the agency “Big Ad”",
        "options": [
            "True", "False"
        ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "4. She is fluent in Spanish and English",
        "options": [
            "True", "False"
        ],
        "correct": "2",
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