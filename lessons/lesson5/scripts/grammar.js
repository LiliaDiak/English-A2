const getToKnow = ["./images/getToKnow/few_little.jpg", "./images/getToKnow/present_simple.jpg" ];
const grammar = document.querySelector('.grammar__images');

        grammar.innerHTML += `
        <div class='grammar__center'>
        <img height="580px" width="900px" src="${getToKnow[0]}" alt="">
        <img height="580px" width="900px" src="${getToKnow[1]}" alt="">
        </div>
    `
