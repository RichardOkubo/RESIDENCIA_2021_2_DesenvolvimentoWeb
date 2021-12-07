import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color:#1b1e20;
  color: white;
  //position: fixed;
  //width: 100%;

  ul {
    display: flex;
    list-style: none;
    margin: 25px;
    align-items: center;
  }

  li {
    margin: 10px;
  }

  .icon {
    color: white;
    font-size: 25px;
  }

  .link {
    text-decoration: none;
  }

  .perfil {
    //background-color: red; //teste
  }
`;

export const Logo = styled.img`
  margin: 15px;

`;

export const LinkStyled = styled.span`
  color: white;
  text-decoration: none;
  transition: .2s;
  padding: 10px;

  &:hover {
    border-radius: 5px;
    background-color: #6c5ce7;
  }
`;

