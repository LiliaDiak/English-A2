const getToKnow = ["./images/getToKnow/do_does_have.jpg","./images/getToKnow/some_any.jpg", "./images/getToKnow/much_many.jpg" ];
const grammar = document.querySelector('.grammar__images');

        grammar.innerHTML += `
        <div class='grammar__center'>
        <img  width="900px" src="${getToKnow[0]}" alt="">
        <img  width="900px" src="${getToKnow[1]}" alt="">
        <img  width="900px" src="${getToKnow[2]}" alt="">
        </div>
    `
