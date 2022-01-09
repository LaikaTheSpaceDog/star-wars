import { connect } from "react-redux";
import Card from "./Card";
import {playRound} from "../../data/actions/state";

const mapStateToProps = ({revealScores }) => ({
    revealScores
});

const mapDispatchToProps = (dispatch) => ({
    play: data => dispatch(playRound(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);