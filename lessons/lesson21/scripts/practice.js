const selections1 = [

    {
        "textStart": " Nicolas met Kevin at primary school. ",
        "options": [
            "True", "False"
        ],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": " Nicolas and Kevin were both good at their schoolwork at primary school.",
        "options": [
            "True", "False"
        ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": " Neither Nicolas nor Kevin enjoyed playing sports.",
        "options": [
            "True", "False"
        ],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "Nicolas doesn’t see Kevin very often these days.",
        "options": [
            "True", "False"
        ],
        "correct": "1",
        "textEnd": ""
    },
        {
        "textStart": " Charlie and Nicolas have similar personalities.",
        "options": [
            "True", "False"
        ],
        "correct": "2",
        "textEnd": ""
    },    
    {
        "textStart": " Charlie liked Nicolas because he was similar to his parents.",
        "options": [
            "True", "False"
        ],
        "correct": "2",
        "textEnd": ""
    },    
    {
        "textStart": "Charlie and Nicolas both finished relationships at about the same time.",
        "options": [
            "True", "False"
        ],
        "correct": "1",
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