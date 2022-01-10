import React, { useEffect } from "react";
import HomeComponent from "./home-styles";
import Card from "../Card/";

const Home = ({player1,player2,reset,winner,transition,nextRound,round,totalRounds}) => {

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
                <p>You: {player1.score}</p>
                <p>Computer: {player2.score}</p>
            </div>
            {transition ?
                <div className="home__alert">
                    {winner === 1 ? 
                        <>
                            <p>You won this round!</p>
                            <p>Round {round} of {totalRounds}</p>
                        </>
                    : winner === 2 ? 
                        <>
                            <p>You lose this round!</p>
                            <p>Round {round} of {totalRounds}</p>
                        </>
                    : winner === "draw" ?
                        <>
                            <p>This round is a draw!</p>
                            <p>Round {round} of {totalRounds}</p>
                        </>
                    : null}
                </div>
            : null}
            <Card playerNum={1} />
            <Card playerNum={2} />
            {round > 1 ?
                <button className="home__reset-button" onClick={() => handleReset()}>Restart Game</button>
            : null }
        </HomeComponent>
    )
}

export default Home;