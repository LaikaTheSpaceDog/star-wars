import initial from "./initial";

const shuffleCards = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

const splitCards = (cards) => {
    const shuffled = shuffleCards(cards);
    const half = Math.ceil(shuffled.length / 2);
    const player1 = shuffled.slice(0,half);
    const player2 = shuffled.slice(-half);
    return [player1,player2];
}

const decks = (cards) => {
    return splitCards(cards);
}

const loaded = (state, decks) => ({
    ...state,
    loaded: true,
    player1: {
        cards: decks[0],
        score: 0,
    }, 
    player2: {
        cards: decks[1],
        score: 0
    },
    totalRounds: Math.floor((decks[0].length + decks[1].length) / 2)
});

const reset = () => ({
    ...initial
})

const play = (state, {data}) => ({
    ...state,
    player1: {
        score: compare(state.player1.cards[0][data], state.player2.cards[0][data],state.player1.score,data),
        cards: state.player1.cards
    },
    player2: {
        score: compare(state.player2.cards[0][data], state.player1.cards[0][data], state.player2.score,data),
        cards: state.player2.cards
    },
    revealScores: true,
    winner: winner(state.player1.cards[0][data], state.player2.cards[0][data],data),
    loser: loser(state.player1.cards[0][data], state.player2.cards[0][data],data),
    transition: true
})

const calcScores = (valA,valB,cat) => {
    let valANumeric = 0;
    let valBNumeric = 0;
    if(cat !== 'films' && !Array.isArray(cat)){
        valANumeric = parseInt(valA.replace(/[^0-9.]/g, 0),10);
        valBNumeric = parseInt(valB.replace(/[^0-9.]/g, 0),10);
    } else {
        valANumeric = valA.length;
        valBNumeric = valB.length;
    }
    return [valANumeric, valBNumeric];
}

const compare = (valA,valB,prevScore,cat) => {
    let scores = calcScores(valA,valB,cat);
    return scores[0] > scores[1] ? (prevScore + 1) : prevScore;
}

const winner = (player1, player2,cat) => {
    let scores = calcScores(player1,player2,cat);
    return scores[0] > scores[1] ? 1 : scores[1] > scores[0] ? 2 : "draw";
}

const loser = (player1, player2,cat) => {
    let scores = calcScores(player1,player2,cat);
    return scores[0] < scores[1] ? 1 : scores[1] < scores[0] ? 2 : "draw";
}

const removeTopCard = (deck) => {
    deck.shift();
    return deck;
}


const addToDiscardPile = (pile,newCardA,newCardB) => {
    pile.push(newCardA,newCardB);
    return pile;
}

const next = (state) => ({
    ...state,
    discardedCards: addToDiscardPile(state.discardedCards,state.player1.cards[0],state.player2.cards[0]),
    player1: {
        score: state.player1.score,
        cards: removeTopCard(state.player1.cards)
    },
    player2: {
        score: state.player2.score,
        cards: removeTopCard(state.player2.cards)
    },
    round: state.round + 1,
    transition: false,
    revealScores: false
});

const reducer = (state, action) => {
    switch (action.type) {
        case "loaded": return loaded(state, decks(action.data));
        case "reset": return reset();
        case "play": return play(state, action);
        case "next": return next(state);
        default: return state;
    }
}

export default reducer;