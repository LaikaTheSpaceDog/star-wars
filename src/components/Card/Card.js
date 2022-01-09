import CardComponent from "./card-styles";

const Card = ({cards}) => {
    return(
        <CardComponent>
            <div className="card__title">
                <h2>{cards[0].name}</h2>
            </div>
            <div className="card__image"></div>
            <div className="card__details">
                <ul className="card__details-list">
                    <li className="card__details-list-item">
                        <p>Max Speed</p>
                        <p>{cards[0].max_atmosphering_speed}</p>
                    </li>
                    <li className="card__details-list-item">
                        <p>Credit Cost</p>
                        <p>{cards[0].cost_in_credits}</p>
                    </li>
                    <li className="card__details-list-item">
                        <p>Passengers</p>
                        <p>{cards[0].passengers}</p>
                    </li>
                    <li className="card__details-list-item">
                        <p>Film Appearances</p>
                        <p>{cards[0].films.length}</p>
                    </li>
                </ul>
            </div>
        </CardComponent>
    );
}

export default Card;