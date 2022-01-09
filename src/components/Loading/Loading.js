import React from "react";
import {Component} from "react";
import LoadingComponent from "./loading-styles";

class Loading extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render(){
        const {children, loaded} = this.props;

        return loaded ? children : (
            <LoadingComponent>
                <h1>LOADING</h1>
            </LoadingComponent>
        );
    }
}

export default Loading;