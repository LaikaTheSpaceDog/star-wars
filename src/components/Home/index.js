import { connect } from "react-redux";
import Home from "./Home";
import {reset,next} from "../../data/actions/state";

const mapStateToProps = ({player1,player2,winner,transition}) => ({
    player1,
    player2,
    winner,
    transition
});

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(reset()),
    nextRound: () => dispatch(next())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);