import styled from "styled-components";
import {colors} from '../../global-styles/styleVariables';
import image from "../../assets/img/bg/logo.png";

const CardComponent = styled.div`
    background-color: ${colors.white};
    margin: 61px 48px;
    width: 319px;
    border-radius: 4px;

    .card__title {
        padding: 22px 24px 20px 24px;
        background-color: ${colors.yellow};
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        h2 {
            line-height: 24px;
        }
    }

    .card__image {
        background-image: url(${image});
        height: 179px;
    }

    .card__details {
        padding: 32px 24px 24px 24px;

        .card__details-list {
            display: flex;
            flex-direction: column;
            gap: 24px;

            .card__details-list-item {
                background-color: ${colors.yellow};
                padding: 8px;
                line-height: 24px;
                display: flex;
                justify-content: space-between;
                cursor: pointer;
            }
        }
    }
`
export default CardComponent;