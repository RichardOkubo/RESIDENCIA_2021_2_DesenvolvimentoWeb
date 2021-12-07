import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminClienteAdd({ header }) {
  const [enderecoNovo, setEnderecoNovo] = useState({
    cep: "",
    bairro: "",
    cidade: "",
    complemento: "",
    estado: "",
    rua: "",
  });

  async function handlerEndereco() {
    const cep = document.getElementById("cep").value;

    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    setEnderecoNovo({
      cep: data.cep,
      bairro: data.bairro,
      cidade: data.localidade,
      complemento: data.complemento,
      estado: data.uf,
      rua: data.logradouro,
    });
  }

  async function handlerSubmit(event) {
    event.preventDefault();

    const novoCliente = {
      nome: document.getElementById("nome").value,
      usuario: document.getElementById("usuario").value,
      email: document.getElementById("email").value,
      cpf: document.getElementById("cpf").value,
      dataNascimento: document.getElementById("dataNascimento").value,
      endereco: {
        ...enderecoNovo,
        numero: parseInt(document.getElementById("numero").value),
      },
    };

    try {
      await api.post("cliente", novoCliente);
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
            <h1>Novo cliente</h1>
            <div className="add-cliente-group">
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                required
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="usuario"
                type="text"
                placeholder="Usuário"
                name="usuario"
                required
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="add-cliente-group">
              <input id="cpf" type="text" placeholder="CPF" required />
            </div>
            <div className="add-cliente-group">
              <input
                id="dataNascimento"
                type="text"
                placeholder="Data de Nascimento"
                name="dataNascimento"
                required
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="numero"
                type="number"
                placeholder="Número"
                name="numero"
                required
              />
            </div>

            <div id="cep-box"> 
              <button id="busca-cep" type="button" onClick={handlerEndereco}>
                Buscar
              </button>

              <div className="add-cliente-group">
                <input
                  id="cep"
                  type="text"
                  placeholder="CEP"
                  name="cep"
                  required
                />
              </div>
            </div>


            <div className="add-cliente-group">
              <input
                id="logradouro"
                type="text"
                placeholder="Logradouro"
                name="logradouro"
                value={enderecoNovo.rua}
                required
                disabled
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="localidade"
                type="text"
                placeholder="Localidade"
                name="localidade"
                value={enderecoNovo.cidade}
                required
                disabled
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="bairro"
                type="text"
                placeholder="Bairro"
                name="bairro"
                value={enderecoNovo.bairro}
                required
                disabled
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="uf"
                type="uf"
                placeholder="UF"
                name="uf"
                value={enderecoNovo.estado}
                required
                disabled
              />
            </div>
            <div className="add-cliente-group">
              <input
                id="complemento"
                type="complemento"
                placeholder="Complemento"
                name="complemento"
                value={enderecoNovo.complemento}
                required
                disabled
              />
            </div>

            <div className="add-cliente-group two-button">
              <Link to="/admin/cliente">
                <button>Voltar</button>
              </Link>
              <button name="submit" id="adicionar">
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminClienteAdd;
