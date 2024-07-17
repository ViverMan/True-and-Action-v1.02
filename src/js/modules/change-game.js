

function games () {

        let game = document.querySelector('.games-content');
        let true_and_action = document.querySelector('.true-action-content');
        let strip = document.querySelector('.strip-content');

    let func = document.querySelector('.btn-game-true').addEventListener('click', function (e) {

        game.style.display = game.style.display = 'none';
        strip.style.display = strip.style.display = 'none';
        true_and_action.style.display = true_and_action.style.display = 'flex';

        return;
    });
    
    let func2 = document.querySelector('.btn-game-strip').addEventListener('click', function (g) {

        game.style.display = game.style.display = 'none';
        true_and_action.style.display = true_and_action.style.display = 'none';
        strip.style.display = strip.style.display = 'flex';

        return
    });  
};


export default games;