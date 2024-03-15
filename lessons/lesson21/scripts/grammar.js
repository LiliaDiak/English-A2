const getToKnow = ["./images/getToKnow/grammar-1.jpg" ];
const grammar = document.querySelector('.grammar__images');

        grammar.innerHTML += `
        <div class='grammar__center'>
        <img  width="800px" src="${getToKnow[0]}" alt="">
        </div>
    `
