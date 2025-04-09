function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let button = gameSelecionado.querySelector('.dashboard__item__button');

    let wordsConfirmation = imagem.classList.contains('dashboard__item__img--rented') ? 'Devolver' : 'Alugar';
    let confirmation = confirm(`Tem certeza que deseja ${wordsConfirmation} este item?`)

    if (confirmation == true) {

        if (imagem.classList.contains('dashboard__item__img--rented')) {
            imagem.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.innerHTML = 'Alugar';
        } else {
            imagem.classList.add('dashboard__item__img--rented')
            button.innerHTML = 'Devolver';
            button.classList.add('dashboard__item__button--return')
        }
    }
        
}