import styled from "styled-components";
//import background from "../../assets/background2.jpg";

export const DetailProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  margin: 20px auto;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 2px 2px 10px black;

  button {
    width: 120px;
    padding: 10px;
    text-align: center;
    border: none;
    background: #6c5ce7;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    margin: auto 10px;
  }
  
  img {
    max-width:100%;
    max-height:100%;
  }
`;

