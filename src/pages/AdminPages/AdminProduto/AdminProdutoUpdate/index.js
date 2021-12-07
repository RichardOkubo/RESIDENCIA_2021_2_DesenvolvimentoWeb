import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import api from "../../../../services/api";
import "./style.css";

function AdminProdutoUpdate({ header }) {
  const [produto, setProduto] = useState();

  const parametros = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`produto/${parametros.params.id}`);

      setProduto(data);
    }

    fetchData();
  }, [parametros]);

  async function handlerSubmit(event) {
    event.preventDefault();

    const novoProduto = {
      dataFabricacao: document.getElementById("dataFabricacao").value,
      descricao: document.getElementById("descricao").value,
      fotoLink: produto?.fotoLink,
      id: produto?.id,
      idCategoria: Number(document.getElementById("idCategoria").value),
      idFuncionario: Number(document.getElementById("idFuncionario").value),
      nome: document.getElementById("nome").value,
      nomeCategoria: document.getElementById("nomeCategoria").value,
      nomeFuncionario: document.getElementById("nomeFuncionario").value,
      qtdEstoque: Number(document.getElementById("qtdEstoque").value),
      valor: Number(document.getElementById("valor").value),
    };
    
    try {
      await api.put(`produto/${parametros.params.id}`, novoProduto);
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
            <h1>Produto {produto?.id}</h1>
            <div className="update-produto-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                defaultValue={produto?.nome}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">Descrição</label>
              <input
                id="descricao"
                type="txt"
                placeholder="Descrição"
                name="descricao"
                defaultValue={produto?.descricao}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">Valor</label>
              <input
                id="valor"
                type="number"
                placeholder="Valor"
                name="valor"
                defaultValue={produto?.valor}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">Quantidade em estoque</label>
              <input
                id="qtdEstoque"
                type="number"
                placeholder="Quantidade em estoque"
                name="qtdEstoque"
                defaultValue={produto?.qtdEstoque}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">ID Categoria</label>
              <input
                id="idCategoria"
                type="number"
                placeholder="ID da categoria"
                name="idCategoria"
                defaultValue={produto?.idCategoria}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">Categoria</label>
              <input
                id="nomeCategoria"
                type="txt"
                placeholder="Categoria"
                name="nomeCategoria"
                defaultValue={produto?.nomeCategoria}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">ID Funcionário</label>
              <input
                id="idFuncionario"
                type="number"
                placeholder="ID do funcionário"
                name="idFuncionario"
                defaultValue={produto?.idFuncionario}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">Funcionário</label>
              <input
                id="nomeFuncionario"
                type="txt"
                placeholder="Funcionário"
                name="nomeFuncionario"
                defaultValue={produto?.nomeFuncionario}
                required
              />
            </div>
            <div className="update-produto-group">
              <label htmlFor="nome">Data de fabricação</label>
              <input
                id="dataFabricacao"
                type="text"
                placeholder="Data de fabricação"
                name="dataFabricacao"
                defaultValue={produto?.dataFabricacao}
                required
              />
            </div>

            <div className="update-produto-group two-button">
              <Link to="/admin/produto">
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

export default AdminProdutoUpdate;
