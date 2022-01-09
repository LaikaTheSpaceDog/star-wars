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
    return [shuffled.slice(0,half),shuffled.slice(-half)];
}

const loaded = (state, {data}) => ({
    ...state,
    loaded: true,
    player1Cards: splitCards(data)[0],
    player2Cards: splitCards(data)[1]
})

const reducer = (state, action) => {
    switch (action.type) {
        case "loaded": return loaded(state, action);
        default: return state;
    }
}

export default reducer;