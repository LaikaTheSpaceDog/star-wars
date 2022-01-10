import styled from "styled-components";
import bg from '../../assets/img/bg/stars.png';
import {colors} from '../../global-styles/styleVariables';

const HomeComponent = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .home__scores {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 20px 16px;
        
        p {
            color: ${colors.white};
            font-size: 26px;
            font-weight: 600;
            line-height: 32.5px;
        }
    }

    .home__reset-button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: ${colors.black};
        color: ${colors.yellow};
        border: none;
        padding: 10px 20px;
        font-size: 26px;
        line-height: 32.5px;
        cursor: pointer;
        border-radius: 4px;
        text-transform: uppercase;
        transition: background-color ease-in-out 250ms, color ease-in-out 250ms;

        &:hover {
            background-color: ${colors.yellow};
            color: ${colors.black};
        }
    }

    .home__alert {
        color: ${colors.yellow};
        font-size: 26px;
        line-height: 32.5px;
        padding: 20px 0;
        text-align: center;
        text-transform: uppercase;
        position: absolute;
        top: 0;

        p {
            animation: zoom-in-zoom-out 2s ease-in-out 1;
        }
    }

    @keyframes zoom-in-zoom-out {
        0% {
            transform: scale(0, 0);
        }
        50% {
            transform: scale(1, 1);
        }
    }
`
export default HomeComponent;