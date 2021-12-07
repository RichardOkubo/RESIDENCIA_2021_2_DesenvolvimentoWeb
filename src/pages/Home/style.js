import styled from "styled-components";
// import background1 from "../../assets/background2.jpg";


export const Container = styled.div `
  width: 100%;
  display: flex;
  background: #DCDCDC;
  background-size: cover;
`;

export const ContainerCentral = styled.div `
  width: 100%;
  height: 80%;
  margin: 0 auto;
  display: flex;


`;

export const Card = styled.div `
        max-width: 100%;
        .card-img-top {
        justify-content: center;
        zoom: 25%;
        width: 75vw;
        border-radius: 15%;
    }
    .card {
        margin: 30px auto;
        background-color: transparent;
        border: none;
        display: grid;
        justify-content: center;
     

    }



    .card-title {
        justify-content: center;

    }
    .card-text {
        justify-content: center;
        width: fit-content;
        height: fit-content;
    }
`


export const CardText = styled.p `
justify-content: center;
width: fit-content;
height: fit-content;
`
