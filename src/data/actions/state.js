export const loaded = (data) => {
    return {
        type: "loaded",
        data: data
    };
};

export const playRound = (data) => {
    return {
        type: "play",
        data: data
    }
}

export const reset = () => {
    return {
        type: "reset"
    }
}