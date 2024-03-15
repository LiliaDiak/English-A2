const selections2 = [
    {
        "textStart": "  Modern smartphones are ",
        "options": ["screen", "faster", "gadget", "useful", "expensive", "headphones"],
        "correct": 2,
        "textEnd": "and more powerful than old models."
    },
    {
        "textStart": " But they are",
        "options": ["screen", "faster", "gadget", "useful", "expensive", "headphones"],
        "correct": 5,
        "textEnd": " too.Of course, there are cheaper versions but their camera is not so good and they are usually slow."
    },
    {
        "textStart": "If you need a smartphone to make calls and you are not a fan of social networks you do not need a big",
        "options": ["screen", "faster", "gadget", "useful", "expensive", "headphones"],
        "correct": 1,
        "textEnd": ", you see everything even if the phone is not big."
    },
    {
        "textStart": "But if you read books on the phone, cheap small models are not for you. And you need",
        "options": ["screen", "faster", "gadget", "useful", "expensive", "headphones"],
        "correct": 6,
        "textEnd": "to listen to music on your"
    },
    {
        "textStart": "",
        "options": ["screen", "faster", "gadget", "useful", "expensive", "headphones"],
        "correct": 3,
        "textEnd": ""
    },
    {
        "textStart": ". So be sure you know what you need to find a",
        "options": ["screen", "faster", "gadget", "useful", "expensive", "headphones"],
        "correct": 4,
        "textEnd": "smartphone."
    }
   
]

const practice2Form = document.querySelector('.practice2__form');
const practice2 = (mass) => {
    for (let item of mass) {
        practice2Form.innerHTML += `
        <p class="practice__text2">${item.textStart}
        <select class='practice2__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
        <option class='option__practice' value="${item.options[3]}">${item.options[3]}</option>
        <option class='option__practice' value="${item.options[3]}">${item.options[4]}</option>
        <option class='option__practice' value="${item.options[3]}">${item.options[5]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practice2Form.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers2()">`
}
practice2(selections2);


const checkAnswers2 = () => {
    const mass = [...selections2];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice2__select');
    for (let select = 0; select < selections2.length; select++) {
        if (selects[select].options.selectedIndex == mass[select].correct) {
            countCorrect++;
            selects[select].style.border = 'solid 3px green';
        }
        else {
            countINcorrect++;
            selects[select].style.border = 'solid 3px red';

        }


    }
    console.log('correct ' + countCorrect + '/' + mass.length)
}
