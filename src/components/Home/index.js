import { connect } from "react-redux";
import Home from "./Home";
import {reset} from "../../data/actions/state";

const mapStateToProps = ({ player1,player2,winner}) => ({
    player1,
    player2,
    winner,
});

const mapDispatchToProps = (dispatch) => ({
    reset: data => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);