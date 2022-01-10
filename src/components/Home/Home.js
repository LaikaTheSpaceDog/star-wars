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
            },3000);
        }
    },[transition,nextRound]);

    return(
        <HomeComponent>
            <div className="home__scores">
                <p>You: {player1.score}</p>
                <p>Computer: {player2.score}</p>
            </div>
            {transition || round > totalRounds ?
                <div className="home__alert">
                    {round < totalRounds || transition ? 
                        winner === 1 ? 
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
                        : null
                    : null}
                </div>
            : null}
            {round <= totalRounds || transition ?
                <>
                    <Card playerNum={1} />
                    <Card playerNum={2} />
                </>
            : 
                <div className="home__final">
                    <p class="home__final-result">{
                        player1.score > player2.score ? "Game Over... You Won!"
                        : player2.score > player1.score ? "Game Over... You Lost!"
                        : player1.score === player2.score ? "Game Over... It's a draw!"
                        : null
                    }</p>
                    <p className="home__final-play-again" onClick={() => handleReset()}>Play Again?</p>
                </div>
            }
            {round > 1 && round < totalRounds ?
                <button className="home__reset-button" onClick={() => handleReset()}>Restart Game</button>
            : null }
        </HomeComponent>
    )
}

export default Home;