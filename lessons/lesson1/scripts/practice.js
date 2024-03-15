const selections1 = [

    {
        "textStart": "Who is going to go swimming every day?",
        "options": [
            "John",
            "Sally",
            "Darren",],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "Who is going to tidy the garden?",
        "options": [
            "John",
            "Sally",
            "Darren",],
        "correct": "1",
        "textEnd": ""
    },
    {
        "textStart": "Who is going to try to make new friends?",
        "options": [
            "John",
            "Sally",
            "Darren",],
        "correct": "2",
        "textEnd": ""
    },
    {
        "textStart": "Who is going to cycle more often?",
        "options": [
            "John",
            "Sally",
            "Darren",],
        "correct": "3",
        "textEnd": ""
    },
    {
        "textStart": "Who is going to start photography classes?",
        "options": [
            "John",
            "Sally",
            "Darren",],
        "correct": "3",
        "textEnd": ""
    },
    {
        "textStart": "Who is going to eat more healthily?",
        "options": [
            "John",
            "Sally",
            "Darren",],
        "correct": "1",
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
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
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