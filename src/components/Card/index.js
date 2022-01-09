import { connect } from "react-redux";
import Card from "./Card";
import {playRound} from "../../data/actions/state";

const mapStateToProps = ({revealScores,winner,loser}) => ({
    revealScores,
    winner,
    loser
});

const mapDispatchToProps = (dispatch) => ({
    play: data => dispatch(playRound(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);