import styled from "styled-components";
import {colors} from '../../global-styles/styleVariables';

const CardComponent = styled.div`
    background-color: ${colors.white};
    margin: 61px 48px;

    .card__title {
        padding: 22px 24px 20px 24px;
        background-color: ${colors.yellow};
    }

    .card__details {
        padding: 32px 24px 24px 24px;
    }
`
export default CardComponent;