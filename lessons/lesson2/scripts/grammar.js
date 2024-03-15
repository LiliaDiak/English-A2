const getToKnow = ["./images/getToKnow/present_simple.jpg","./images/getToKnow/have_has.jpg", "./images/getToKnow/do_does_have.jpg" ];
const grammar = document.querySelector('.grammar__images');

        grammar.innerHTML += `
        <div class='grammar__center'>
        <img height="580px" width="900px" src="${getToKnow[0]}" alt="">
        <img height="500px" width="900px" src="${getToKnow[1]}" alt="">
        <img height="680px" width="900px" src="${getToKnow[2]}" alt="">
        </div>
    `
