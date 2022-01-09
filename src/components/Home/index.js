import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = ({ starships }) => ({
    starships,
});

export default connect(mapStateToProps)(Home);