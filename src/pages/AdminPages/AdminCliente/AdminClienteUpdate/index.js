import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminClienteUpdate({ header }) {
  const [cliente, setCliente] = useState();

  const parametros = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`cliente/${parametros.params.id}`);

      setCliente(data);
    }

    fetchData();
  }, [parametros]);

  async function handlerSubmit(event) {
    event.preventDefault();

    const novoCliente = {
      id: cliente?.id,
      nome: document.getElementById("nome").value,
      usuario: document.getElementById("usuario").value,
      email: document.getElementById("email").value,
      cpf: document.getElementById("cpf").value,
      dataNascimento: document.getElementById("dataNascimento").value,
    };

    /*
    "endereco": {
      "bairro": "string",
      "cep": "string",
      "cidade": "string",
      "complemento": "string",
      "estado": "string",
      "numero": "string",
      "rua": "string"
    },
    */

    try {
      await api.put(`cliente/${parametros.params.id}`, novoCliente);
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
            <h1>Cliente {cliente?.id}</h1>
            <div className="update-cliente-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                defaultValue={cliente?.nome}
                required
              />
            </div>
            <div className="update-cliente-group">
              <label htmlFor="usuario">Usuário</label>
              <input
                id="usuario"
                type="text"
                placeholder="Usuário"
                name="usuario"
                defaultValue={cliente?.usuario}
                required
              />
            </div>
            <div className="update-cliente-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                defaultValue={cliente?.email}
                required
              />
            </div>
            <div className="update-cliente-group">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                placeholder="CPF"
                name="cpf"
                defaultValue={cliente?.cpf}
                required
              />
            </div>
            <div className="update-cliente-group">
              <label htmlFor="dataNascimento">Data de Nasc.</label>
              <input
                id="dataNascimento"
                type="text"
                placeholder="Data de Nascimento"
                name="dataNascimento"
                defaultValue={cliente?.dataNascimento}
                required
              />
            </div>

            <div className="update-cliente-group two-button">
              <Link to="/admin/cliente">
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

export default AdminClienteUpdate;
