import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminFuncionarioUpdate({ header }) {
  const [funcionario, setFuncionario] = useState();

  const parametros = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`funcionario/${parametros.params.id}`);

      setFuncionario(data);
    }

    fetchData();
  }, [parametros]);

  async function handlerSubmit(event) {
    event.preventDefault();

    const novoFuncionario = {
      id: funcionario?.id,
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
    };

    try {
      await api.put(`funcionario/${parametros.params.id}`, novoFuncionario);
    } catch (err) {
      console.log(err);
    }

    alert("Verifique a atualização");
  }

  return (
    <>
      <Header header={{ ...header }} />

      <div className="admin-update">
        <div className="admin-update-content">
          <form onSubmit={(event) => handlerSubmit(event)} method="PUT">
            <h1>Funcionário {funcionario?.id}</h1>
            <div className="update-funcionario-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                defaultValue={funcionario?.nome}
                required
              />
            </div>
            <div className="update-funcionario-group">
              <label htmlFor="nome">CPF</label>
              <input
                id="cpf"
                type="txt"
                placeholder="CPF"
                name="cpf"
                defaultValue={funcionario?.cpf}
                required
              />
            </div>

            <div className="update-funcionario-group two-button">
              <Link to="/admin/funcionario">
                <button>Voltar</button>
              </Link>
              <button name="submit">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminFuncionarioUpdate;
