import phrases from "./../../html/data/question-true-normal.json";
import phrases2 from "./../../html/data/question-action-normal.json";
import phrases3 from "./../../html/data/question-true-hot.json";
import phrases4 from "./../../html/data/question-action-hot.json";
// -------- norma --------- //

function test () {

    let phrase = document.querySelector('.phrase');
    
    const but = document.querySelector('.btn-true-norm');

    if (but) {
      but.addEventListener('click', function() {
    
        // let element = document.querySelector('.question-content-card');
        // element.classList.remove('question-red');
        // element.classList.add('question-blue');

    
        let rand = phrases.splice(Math.floor(Math.random() * phrases.length), 1);

        phrase.innerText = rand;

        if (rand == '') {
          phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
        };
    
      });
    };

    const but2 = document.querySelector('.btn-action-norm');

    if (but2) {
      but2.addEventListener('click', function() {
    
        // let element = document.querySelector('.question-content-card');
        // element.classList.remove('question-red');
        // element.classList.add('question-blue');

    
        let rand2 = phrases2.splice(Math.floor(Math.random() * phrases2.length), 1);

        phrase.innerText = rand2;

        if (rand2 == '') {
          phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
        };
    
      });
    };

    const but3 = document.querySelector('.btn-true-hot');

    if (but3) {
      but3.addEventListener('click', function() {
    
        // let element = document.querySelector('.question-content-card');
        // element.classList.remove('question-red');
        // element.classList.add('question-blue');

    
        let rand3 = phrases3.splice(Math.floor(Math.random() * phrases3.length), 1);

        phrase.innerText = rand3;

        if (rand3 == '') {
          phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
        };
    
      });
    };

    const but4 = document.querySelector('.btn-action-hot');

    if (but4) {
      but4.addEventListener('click', function() {
    
        // let element = document.querySelector('.question-content-card');
        // element.classList.remove('question-red');
        // element.classList.add('question-blue');

    
        let rand4 = phrases4.splice(Math.floor(Math.random() * phrases4.length), 1);

        phrase.innerText = rand4;

        if (rand4 == '') {
          phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
        };   
      });
    };
};

export default test;

// const but2 = document.querySelector('.btn-action-norm');
// if (but2) {
//   but2.addEventListener('click', function() {

//     // let element = document.querySelector('.question-content-card');
//     // element.classList.remove('question-blue');
//     // element.classList.add('question-red');

//     let rand = phrases2.splice(Math.floor(Math.random() * phrases2.length), 1);
//     phrase.innerText = rand;

//     if (rand == '') {
//       phrase.innerText = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
//     }
//   });
// } 