import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminCategoriaAdd({ header }) {

  async function handlerSubmit(event) {
    event.preventDefault();

    const novaCategoria = {
      nome: document.getElementById("nome").value,
      descricao: document.getElementById("descricao").value,
    };

    try {
      await api.post("categoria", novaCategoria);
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
          <form onSubmit={(event) => handlerSubmit(event)} method="POST">
            <h1>Nova categoria</h1>
            <div className="add-categoria-group">
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                required
              />
            </div>
            <div className="add-categoria-group">
              <input
                id="descricao"
                type="txt"
                placeholder="Descrição"
                name="descricao"
                required
              />
            </div>

            <div className="add-categoria-group two-button">
              <Link to="/admin/categoria">
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

export default AdminCategoriaAdd;
