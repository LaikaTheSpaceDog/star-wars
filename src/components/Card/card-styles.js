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

            &.clickable {
                .card__details-list-item {
                    cursor: pointer;
                }
            }

            .card__details-list-item {
                background-color: ${colors.yellow};
                padding: 3px;
                line-height: 24px;
                display: flex;
                justify-content: space-between;
                border: 5px solid ${colors.yellow};
                transition: border-color ease-in-out 250ms;

                &.won {
                    border-color: ${colors.green};
                    padding: 3px;
                }

                &.draw {
                    border-color: ${colors.orange};
                    padding: 3px;
                }

                &.lost {
                    border-color: ${colors.red};
                    padding: 3px;
                }
            }
        }
    }
`
export default CardComponent;