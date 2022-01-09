import React, { useEffect } from "react";
import LoadingComponent from "./loading-styles";

const Loading = ({loaded, handleLoad,children}) => {

    useEffect(() => {
        if (!loaded) {
            handleLoad();
        }
    });

    return loaded ? children : (
        <LoadingComponent>
            <h1>LOADING</h1>
        </LoadingComponent>
    );
}

export default Loading;