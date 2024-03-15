const selections3 = [
    {
        id: 1,
        textStart: "What is Ella's hobby?",
        options: ['watching TV', 'cooking', 'read books'],
        correct: '2',
        textEnd: '',
    },
    {
        id: 2,
        textStart: 'Where was Ella’s Japanese cooking course?',
        options: ['at the library', 'at the college', 'at school'],
        correct: '2',
        textEnd: '',
    },
    {
        id: 3,
        textStart: 'How many weeks was Ella’s Japanese cooking course?',
        options: ['seven', 'eight', 'nine'],
        correct: '2',
        textEnd: '',
    },
    {
        id: 4,
        textStart: 'At the moment, Jack is learning...',
        options: ['how to record music', 'how to play the violin', 'about classical music'],
        correct: '1',
        textEnd: '',
    },
    {
        id: 5,
        textStart: 'What instrument can’t Jack play well?',
        options: [' the violin', 'the drums', 'the guitar'],
        correct: '3',
        textEnd: '',
    },
    {
        id: 6,
        textStart: 'How many concerts does Jack plan to see this month?',
        options: ['two', 'four', 'six'],
        correct: '1',
        textEnd: '',
    },
]

const practice3Form = document.querySelector('.video__form');
const practice3 = (mass) => {
    for (let item of mass) {
        practice3Form.innerHTML += `
        <p class="practice__text practice3__text">${item.textStart}
        <select class='practice3__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practice3Form.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers3()">`
}
practice3(selections3);


const checkAnswers3 = () => {
    const mass = [...selections3];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice3__select');
    for (let select = 0; select < selections3.length; select++) {
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

