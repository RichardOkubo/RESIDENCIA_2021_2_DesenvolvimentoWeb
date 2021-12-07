import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; //FaCartPlus
import { useHistory } from "react-router-dom";

import { NavBar, Logo, LinkStyled } from "./style";
import logo from "../../assets/logo-white.png";

function Header({ header }) {
  const history = useHistory();

  const { token, logout } = header;

  function efetuarLogout() {
    logout();
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("senha");
    localStorage.removeItem("perfil");
    localStorage.removeItem("token");
    alert("Logout");
    history.push("/");
  }

  const navLogin = [
    {
      tag: <LinkStyled>Login</LinkStyled>,
      link: "/login",
      id: 1,
    },
    {
      tag: <LinkStyled>Cadastrar</LinkStyled>,
      link: "/create-account",
      id: 2,
    },
    {
      tag: <FaShoppingCart className="icon" />,
      link: "/cart",
      id: 3,
    },
  ];

  const navLogout = [
    {
      tag: <LinkStyled>Admin</LinkStyled>,
      link: "/admin",
      id: 1,
    },
    {
      tag: <FaShoppingCart className="icon" />,
      link: "/cart",
      id: 2,
    },
  ];

  if (token) {
    if (localStorage.getItem("perfil") === "USER") {
      return (
        <NavBar>
          <Link to="/">
            <Logo src={logo} alt="" width="100px" />
          </Link>
          <nav>
            <ul>
              <li>
                <LinkStyled onClick={efetuarLogout}>Logout</LinkStyled>
              </li>
              <li>
                <Link to="/cart" className="link">
                  <FaShoppingCart className="icon" />,
                </Link>
              </li>
            </ul>
          </nav>
        </NavBar>
      );
    } else {
      return (
        <NavBar>
          <Link to="/">
            <Logo src={logo} alt="" width="100px" />
          </Link>
          <nav>
            <ul>
              <li>
                <LinkStyled onClick={efetuarLogout}>Logout</LinkStyled>
              </li>
              {navLogout.map(({ link, tag, id }) => {
                return (
                  <li key={id}>
                    <Link to={link} className="link">
                      {tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </NavBar>
      );
    }
  } else {
    return (
      <NavBar>
        <Link to="/">
          <Logo src={logo} alt="" width="100px" />
        </Link>
        <nav>
          <ul>
            {navLogin.map(({ link, tag, id }) => {
              return (
                <li key={id}>
                  <Link to={link} className="link">
                    {tag}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </NavBar>
    );
  }
}

export default Header;
