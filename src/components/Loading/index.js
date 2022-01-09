import { connect } from "react-redux";
import Loading from "./Loading";
import {getStarships} from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getStarships("/starships",[])),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);