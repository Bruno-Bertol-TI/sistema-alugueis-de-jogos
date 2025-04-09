let itemsRented = 0;

function alterarStatus(id) {
    let selectedGame = document.getElementById(`game-${id}`);
    let imagem = selectedGame.querySelector('.dashboard__item__img');
    let button = selectedGame.querySelector('.dashboard__item__button');

    let wordsConfirmation = imagem.classList.contains('dashboard__item__img--rented') ? 'Devolver' : 'Alugar';
    let confirmation = confirm(`Tem certeza que deseja ${wordsConfirmation} este item?`)

    if (confirmation == true) {

        if (imagem.classList.contains('dashboard__item__img--rented')) {
            imagem.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.innerHTML = 'Alugar';
        } else {
            itemsRented++;
            imagem.classList.add('dashboard__item__img--rented');
            button.innerHTML = 'Devolver';
            button.classList.add('dashboard__item__button--return');
        }
    }

    let wordJogos = itemsRented > 1 ? 'jogos' : 'jogo';
    
    console.log(`${itemsRented} ${wordJogos} alugado.`);
}