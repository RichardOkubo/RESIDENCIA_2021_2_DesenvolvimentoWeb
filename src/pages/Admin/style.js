import styled from "styled-components";

export const Nav = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  ul li {
    background-color: #6c5ce7;
    padding: 50px;
    margin: 25px;
    border-radius: 10%;
  }

  ul a {
    color: white;
    text-decoration: none;
  }
`;

export const Text = styled.h1`
  text-align: center;
  margin: 50px auto 0 auto;
`;

/*
.nav-menu {
  background-color: #060b26;
  display: flex;
  justify-content: center;
  height: 400px;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
}

.nav-menu.active {
  left: 0;
  transition: 350ms;
}

.nav-text {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
}

.nav-text a {
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
}

.nav-text a:hover {
  background-color: #1a83ff;
}

.nav-menu-items {
  width: 100%;
}

.navbar-toggle {
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
}

span {
  margin-left: 16px;
}
*/