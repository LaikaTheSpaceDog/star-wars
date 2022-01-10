import React, { useEffect } from "react";
import HomeComponent from "./home-styles";
import Card from "../Card/";

const Home = ({player1,player2,reset,winner,transition,nextRound}) => {

    const handleReset = () => {
        reset();
    }

    useEffect(()=>{
        if(transition){
            setTimeout(()=>{
                nextRound();
            },5000);
        }
    },[transition,nextRound]);

    return(
        <HomeComponent>
            <div className="home__scores">
                <p>{player1.score}</p>
                <p>{player2.score}</p>
            </div>
            <div className="home__alert">
                {winner === 1 ? 
                    <p>You won this round!</p> 
                : winner === 2 ? 
                    <p>You lose this round!</p>
                : winner === "draw" ?
                    <p>This round is a draw!</p>
                : null}
            </div>
            <Card playerNum={1} />
            <Card playerNum={2} />
            <button className="home__reset-button" onClick={() => handleReset()}>RESET</button>
        </HomeComponent>
    )
}

export default Home;