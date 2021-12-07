import styled from "styled-components";
import 'typeface-roboto';

export const Button = styled.button `
    padding: 10px;
    border-radius: 5px;
    background-color: #2D00D4;
    transition: 0.5s;
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #090385;
        transform: translateX(3px);
        transform: scale(1.5,1.5);
        transition: 0.4s; 

    }
`;