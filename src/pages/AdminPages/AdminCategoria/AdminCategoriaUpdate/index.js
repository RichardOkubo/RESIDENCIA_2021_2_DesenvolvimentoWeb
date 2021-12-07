import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminCategoriaUpdate({ header }) {
  const [categoria, setCategoria] = useState();

  const parametros = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`categoria/${parametros.params.id}`);

      setCategoria(data);
    }

    fetchData();
  }, [parametros]);

  async function handlerSubmit(event) {
    event.preventDefault();

    const novaCategoria = {
      id: categoria?.id,
      nome: document.getElementById("nome").value,
      descricao: document.getElementById("descricao").value,
    };

    try {
      await api.put(`categoria/${parametros.params.id}`, novaCategoria);
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
            <h1>Categoria {categoria?.id}</h1>
            <div className="update-categoria-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                defaultValue={categoria?.nome}
                required
              />
            </div>
            <div className="update-categoria-group">
              <label htmlFor="nome">Descrição</label>
              <input
                id="descricao"
                type="txt"
                placeholder="Descrição"
                name="descricao"
                defaultValue={categoria?.descricao}
                required
              />
            </div>

            <div className="update-categoria-group two-button">
              <Link to="/admin/categoria">
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

export default AdminCategoriaUpdate;
