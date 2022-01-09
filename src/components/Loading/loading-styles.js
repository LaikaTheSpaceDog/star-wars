import styled from "styled-components";
import {colors} from '../../global-styles/styleVariables';

const LoadingComponent = styled.div`
    background-color: ${colors.black};
    color: ${colors.yellow};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default LoadingComponent;