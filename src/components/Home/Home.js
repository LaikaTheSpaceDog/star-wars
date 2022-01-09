import React, { useEffect, useState, useCallback } from "react";
import HomeComponent from "./home-styles";

const shuffle = (array) => {
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

const Home = ({starships}) => {

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    
    const splitCards = useCallback(() => {
        const cards = starships;
        const shuffled = shuffle(cards);
        const half = Math.ceil(shuffled.length / 2);
        setPlayer1Cards(shuffled.slice(0,half));
        setPlayer2Cards(shuffled.slice(-half));
    }, [starships]);

    useEffect(()=> {
        splitCards();
    },[splitCards]);

    return(
        <HomeComponent>

        </HomeComponent>
    )
}

export default Home;