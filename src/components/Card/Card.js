import CardComponent from "./card-styles";
import {useState} from "react";

const Card = ({cards,player}) => {

    const [speedActive,setSpeedActive] = useState(false);
    const [creditActive,setCreditActive] = useState(false);
    const [passengersActive,setPassengersActive] = useState(false);
    const [filmsActive,setFilmsActive] = useState(false);

    const handleClick = (id) => {
        if(id === 'speed'){
            setSpeedActive(true);
            setCreditActive(false);
            setPassengersActive(false);
            setFilmsActive(false);
        } else if (id === 'credit'){
            setCreditActive(true);
            setPassengersActive(false);
            setSpeedActive(false);
            setFilmsActive(false);
        } else if (id === 'passengers'){
            setPassengersActive(true);
            setSpeedActive(false);
            setCreditActive(false);
            setFilmsActive(false);
        } else if (id === 'films'){
            setFilmsActive(true);
            setSpeedActive(false);
            setCreditActive(false);
            setPassengersActive(false);
        }
    }

    return(
        <CardComponent>
            <div className="card__title">
                <h2>{cards[0].name}</h2>
            </div>
            <div className="card__image"></div>
            <div className="card__details">
                <ul className={player === 1 ? "card__details-list clickable" : "card__details-list"}>
                    <li className={speedActive ? "card__details-list-item active" : "card__details-list-item"} onClick={player === 1 ? () => handleClick('speed') : null}>
                        <p>Max Speed</p>
                        <p>{player === 1 ? cards[0].max_atmosphering_speed : "?"}</p>
                    </li>
                    <li className={creditActive ? "card__details-list-item active" : "card__details-list-item"} onClick={player === 1 ? () => handleClick('credit') : null}>
                        <p>Credit Cost</p>
                        <p>{player === 1 ? cards[0].cost_in_credits : "?"}</p>
                    </li>
                    <li className={passengersActive ? "card__details-list-item active" : "card__details-list-item"} onClick={player === 1 ?() => handleClick('passengers') : null}>
                        <p>Passengers</p>
                        <p>{player === 1 ? cards[0].passengers : "?"}</p>
                    </li>
                    <li className={filmsActive ? "card__details-list-item active" : "card__details-list-item"} onClick={player === 1 ? () => handleClick('films') : null}>
                        <p>Film Appearances</p>
                        <p>{player === 1 ? cards[0].films.length : "?"}</p>
                    </li>
                </ul>
            </div>
        </CardComponent>
    );
}

export default Card;