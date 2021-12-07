import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  bottom: 0;
  background-color: #111;
  height: auto;
  width: auto;
  padding-top: 40px;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    color: white;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: white;
  }
`;

export const Bottom = styled.div`
  background-color: #000;
  padding: 25px 0;
  text-align: center;

  p {
    color: white;
  }
`;
