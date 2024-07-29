import phrases5 from "../../html/data/question-strip-couple.json";
import phrases6 from "../../html/data/question-strip-three.json";

function questionStrip () {

    let phrase = document.querySelector('.phrase');
    let phrase2 = document.querySelector('.phrase2');
    
    const but5 = document.querySelector('.btn-strip-couple');

    if (but5) {
      but5.addEventListener('click', function() {

        phrase.classList.add('active-on')

        setTimeout(function() {
          phrase.classList.remove('active-on')
        }, 800);

        phrase2.classList.add('none');
    
        // let element = document.querySelector('.question-content-card');
        // element.classList.remove('question-red');
        // element.classList.add('question-blue');

    
        let rand5 = phrases5.splice(Math.floor(Math.random() * phrases5.length), 1);

        phrase.innerText = rand5;

        if (rand5 == '') {
            phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
        };
      });
    };

    const but6 = document.querySelector('.btn-strip-three');

    if (but6) {
      but6.addEventListener('click', function() {

        phrase.classList.add('active-on')

        setTimeout(function() {
          phrase.classList.remove('active-on')
        }, 800);

        phrase2.classList.add('none');
    
        // let element = document.querySelector('.question-content-card');
        // element.classList.remove('question-red');
        // element.classList.add('question-blue');

    
        let rand6 = phrases6.splice(Math.floor(Math.random() * phrases6.length), 1);
        
        console.log = rand6;
        phrase.innerText = rand6;
        
        if (rand6 == '') {
            phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
        };
      });
    };
};

export default questionStrip;