import CardComponent from "./card-styles";
import {useState} from "react";

const Card = ({cards,player,play,revealScores,winner,loser}) => {

    const [speedActive,setSpeedActive] = useState(false);
    const [creditActive,setCreditActive] = useState(false);
    const [passengersActive,setPassengersActive] = useState(false);
    const [filmsActive,setFilmsActive] = useState(false);

    const handlePlay = (category) => {
        play(category);
    }

    const handleClick = (id) => {
        if(id === 'max_atmosphering_speed'){
            setSpeedActive(true);
        } else if (id === 'cost_in_credits'){
            setCreditActive(true);
        } else if (id === 'passengers'){
            setPassengersActive(true);
        } else if (id === 'films'){
            setFilmsActive(true);
        }
        handlePlay(id);
    }

    return(
        <CardComponent>
            <div className="card__title">
                <h2>{cards[0].name ? cards[0].name : ''}</h2>
            </div>
            <div className="card__image"></div>
            <div className="card__details">
                <ul className={player === 1 ? "card__details-list clickable" : "card__details-list"}>
                    <li className={`card__details-list-item ${speedActive ? 'active' : ''} ${speedActive && revealScores && winner === 1 ? 'won' : speedActive && revealScores && winner === 2 ? 'lost' : revealScores && speedActive && winner === 'draw' ? 'draw' : ''}`} onClick={player === 1 ? () => handleClick('max_atmosphering_speed') : null}>
                        <p>Max Speed</p>
                        <p>{player === 1 || revealScores ? cards[0].max_atmosphering_speed : "?"}</p>
                    </li>
                    <li className={`card__details-list-item ${creditActive ? 'active' : ''} ${creditActive && revealScores && winner === 1 ? 'won' : creditActive && revealScores && winner === 2 ? 'lost' : revealScores && creditActive && winner === 'draw' ? 'draw' : ''}`} onClick={player === 1 ? () => handleClick('cost_in_credits') : null}>
                        <p>Credit Cost</p>
                        <p>{player === 1 || revealScores ? cards[0].cost_in_credits : "?"}</p>
                    </li>
                    <li className={`card__details-list-item ${passengersActive ? 'active' : ''} ${passengersActive && revealScores && winner === 1 ? 'won' : passengersActive && revealScores && winner === 2 ? 'lost' : revealScores && passengersActive && winner === 'draw' ? 'draw' : ''}`} onClick={player === 1 ?() => handleClick('passengers') : null}>
                        <p>Passengers</p>
                        <p>{player === 1 || revealScores ? cards[0].passengers : "?"}</p>
                    </li>
                    <li className={`card__details-list-item ${filmsActive ? 'active' : ''} ${filmsActive && revealScores && winner === 1 ? 'won' : filmsActive && revealScores && winner === 2 ? 'lost' : revealScores && filmsActive && winner === 'draw' ? 'draw' : ''}`} onClick={player === 1 ? () => handleClick('films') : null}>
                        <p>Film Appearances</p>
                        <p>{player === 1 || revealScores ? cards[0].films.length : "?"}</p>
                    </li>
                </ul>
            </div>
        </CardComponent>
    );
}

export default Card;