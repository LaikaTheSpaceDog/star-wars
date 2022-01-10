const initial = {
    loaded: false,
    revealScores: false,
    winner: 0,
    loser: 0,
    player1: {
        cards: [],
        score: 0
    },
    player2: {
        cards: [],
        score: 0
    },
    discardedCards: [],
    round: 1,
    totalRounds: 0,
    transition: false
}

export default initial;