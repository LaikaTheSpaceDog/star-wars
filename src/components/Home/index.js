import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = ({ player1Cards,player2Cards }) => ({
    player1Cards,
    player2Cards
});

export default connect(mapStateToProps)(Home);