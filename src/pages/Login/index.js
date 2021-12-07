import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import axios from "axios";


function Login({ login, header }) {
  const history = useHistory();

  async function efetuarLogin(event) {
    event.preventDefault();

    const usuario = {
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
    };

    const { data } = await axios.get(
      "https://61aa2050bfb110001773f0cf.mockapi.io/token/1"
    );

    const { emails, senhas, perfis } = data;

    const usuarioEncontrado = perfis.map((perfil, indice) => {
      if (
        emails[indice] === usuario.email &&
        senhas[indice] === usuario.senha
      ) {
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", usuario.email);
        localStorage.setItem("senha", usuario.senha);
        localStorage.setItem("perfil", perfil);
        localStorage.setItem("token", data.token);
        return true;
      } else {
        return false;
      }
    });

    if (usuarioEncontrado.some(e => e === true)) {
      login(data.token)
      alert("Usuário logado!");
      history.push('/')
    } else {
      alert("Dados incorretos!");
    }
  }

  return (
    <>
      <Header header={{...header}} />

      <div className="login">
        <div className="login-content">
          <form action="" method="GET" onSubmit={efetuarLogin}>
            <h1>Login</h1>
            <div className="login-input-group">
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="login-input-group">
              <input
                id="senha"
                type="password"
                placeholder="Senha"
                name="senha"
                required
              />
            </div>
            <div className="login-input-group">
              <button name="submit">Login</button>
            </div>
            <p className="login-register-text">
              Você não tem uma conta?
              <Link to="/create-account">Cadastre-se aqui</Link>.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
