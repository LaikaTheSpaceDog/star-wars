import React from "react";
import HomeComponent from "./home-styles";
import Card from "../Card/";



const Home = ({starships}) => {

    return(
        <HomeComponent>
            <Card cards={player1Cards} />
            <Card cards={player2Cards} />
        </HomeComponent>
    )
}

export default Home;