import React from "react";
import HomeComponent from "./home-styles";
import Card from "../Card/";

const Home = ({player1Cards,player2Cards}) => {

    return(
        <HomeComponent>
            <Card cards={player1Cards} player={1} />
            <Card cards={player2Cards} player={2} />
        </HomeComponent>
    )
}

export default Home;