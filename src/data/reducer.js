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
    }
});

const reset = () => ({
    ...initial
})

const play = (state, {data}) => ({
    ...state,
    player1: {
        score: compare(state.player1.cards[0][data], state.player2.cards[0][data],state.player1.score),
        cards: state.player1.cards
    },
    player2: {
        score: compare(state.player2.cards[0][data], state.player1.cards[0][data], state.player2.score),
        cards: state.player2.cards
    },
    revealScores: true,
    winner: winner(state.player1.cards[0][data], state.player2.cards[0][data]),
    loser: loser(state.player1.cards[0][data], state.player2.cards[0][data])
})

const compare = (valA,valB,prevScore) => {
    let valANumeric = parseInt(valA.replace(/[^0-9.]/g, 0),10);
    let valBNumeric = parseInt(valB.replace(/[^0-9.]/g, 0),10);
    console.log(valANumeric, valBNumeric);
    return valANumeric > valBNumeric ? (prevScore + 1) : prevScore;
}

const winner = (player1, player2) => {
    let player1Numeric = parseInt(player1.replace(/[^0-9.]/g, 0),10);
    let player2Numeric = parseInt(player2.replace(/[^0-9.]/g, 0),10);
    return player1Numeric > player2Numeric ? 1 : player2Numeric > player1Numeric ? 2 : "draw";
}

const loser = (player1, player2) => {
    let player1Numeric = parseInt(player1.replace(/[^0-9.]/g, 0),10);
    let player2Numeric = parseInt(player2.replace(/[^0-9.]/g, 0),10);
    return player1Numeric < player2Numeric ? 1 : player2Numeric < player1Numeric ? 2 : "draw";
}

const reducer = (state, action) => {
    switch (action.type) {
        case "loaded": return loaded(state, decks(action.data));
        case "reset": return reset();
        case "play": return play(state, action);
        default: return state;
    }
}

export default reducer;