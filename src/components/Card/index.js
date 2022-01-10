import { connect } from "react-redux";
import Card from "./Card";
import {playRound} from "../../data/actions/state";

const mapStateToProps = ({revealScores,winner,loser,player1,player2,transition},ownProps) => {
    const {playerNum} = ownProps;
    let player = [];

    if(playerNum === 1){
        player = player1;
    } else if(playerNum === 2){
        player = player2;
    }

    return {
        revealScores,
        winner,
        loser,
        player,
        transition
    }
};

const mapDispatchToProps = (dispatch) => ({
    play: data => dispatch(playRound(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);