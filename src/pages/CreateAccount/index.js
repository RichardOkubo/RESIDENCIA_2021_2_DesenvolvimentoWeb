import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function CreateAccount({ header }) {
  async function handlerSubmit(event) {
    event.preventDefault();

    alert("No momento, está funcionalidade está indisponível.");
  }

  return (
    <>
      <Header header={{ ...header }} />

      <div className="create-account">
        <div className="create-account-content">
          <form onSubmit={(event) => handlerSubmit(event)} method="POST">
            <h1>Cadastrar</h1>
            <div className="create-input-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="create-input-group">
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                id="senha"
                required
              />
            </div>

            <div className="create-input-group">
              <button name="submit" className="create-btn">
                Cadastrar
              </button>
            </div>
            <p>
              Você já tem uma conta? <Link to="/login">Entre por aqui</Link>.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateAccount;
