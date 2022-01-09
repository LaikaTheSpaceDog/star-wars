import styled from "styled-components";
import bg from '../../assets/img/bg/stars.png';

const HomeComponent = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default HomeComponent;