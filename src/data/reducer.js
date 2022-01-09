const loaded = (state, {data}) => ({
    ...state,
    loaded: true,
    starships: data
})

const reducer = (state, action) => {
    switch (action.type) {
        case "loaded": return loaded(state, action);
        default: return state;
    }
}

export default reducer;