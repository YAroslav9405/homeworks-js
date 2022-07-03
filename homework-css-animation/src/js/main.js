let cardList = document.querySelector('.card-list');


let cards = [
    'src/img/a.svg',
    'src/img/clubs_ace.svg',
    'src/img/diamonds_ace.svg',
    'src/img/hearts_ace.svg',
    'src/img/king/spades_king.svg',
    'src/img/king/clubs_king.svg',
    'src/img/king/diamonds_king.svg',
    'src/img/king/hearts_king.svg',
    'src/img/queen/clubs_queen.svg',
    'src/img/queen/diamonds_queen.svg',
    'src/img/queen/hearts_queen.svg',
    'src/img/queen/spades_queen.svg',
    'src/img/jack/clubs_jack.svg"',
    'src/img/jack/diamonds_jack.svg',
    'src/img/jack/hearts_jack.svg',
    'src/img/jack/spades_jack.svg',
]

for (let i = 0; i < cards.length; i++) {
    const block = `
    <li class="card">
        <img src="src/img/astronaut.svg" alt="card-description"  class="front">
        <img src="${cards[i]}" alt="card-description"  class="back">
    </li>
    `;
    cardList.insertAdjacentHTML("beforeend", block);
   
};



