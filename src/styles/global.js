import {createGlobalStyle} from "styled-components";
import 'typeface-roboto';

export default createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    .body{
      font: 400 14px Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
`;
