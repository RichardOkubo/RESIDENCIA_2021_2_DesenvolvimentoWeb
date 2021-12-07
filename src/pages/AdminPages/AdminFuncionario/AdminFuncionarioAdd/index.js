import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminFuncionarioAdd({ header }) {

  async function handlerSubmit(event) {
    event.preventDefault();

    const novoFuncionario = {
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
    };

    try {
      await api.post("funcionario", novoFuncionario);
      alert("Verifique o cadastro do novo elemento");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header header={{ ...header }} />

      <div className="admin-update">
        <div className="admin-update-content">
          <form onSubmit={(event) => handlerSubmit(event)} method="PUT">
            <h1>Novo funcionário</h1>
            <div className="add-funcionario-group">
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                required
              />
            </div>
            <div className="add-funcionario-group">
              <input
                id="cpf"
                type="txt"
                placeholder="CPF"
                name="cpf"
                required
              />
            </div>

            <div className="add-funcionario-group two-button">
              <Link to="/admin/funcionario">
                <button>Voltar</button>
              </Link>
              <button name="submit">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminFuncionarioAdd;
