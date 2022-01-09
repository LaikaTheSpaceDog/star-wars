import React from "react";
import HomeComponent from "./home-styles";
import Card from "../Card/";

const Home = ({player1Cards,player2Cards}) => {

    return(
        <HomeComponent>
            <Card cards={player1Cards} />
            <Card cards={player2Cards} />
        </HomeComponent>
    )
}

export default Home;