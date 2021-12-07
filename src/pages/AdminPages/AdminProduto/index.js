import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";

import api from "../../../services/api";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdminProdutoContainer, Table } from "./style";

function Produto({ header }) {
  async function deletar(id) {
    const resposta = window.confirm(`Deseja deletar este elemento? (ID ${id})`);

    if (resposta) {
      try {
        await api.delete(`produto/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("produto");

      setProdutos(data);
    }

    fetchData();
  }, [produtos]);

  return (
    <>
      <Header header={{ ...header }} />

      <AdminProdutoContainer>
        <h1>Produtos</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(({ id, nome, nomeCategoria, qtdEstoque, valor }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{nome}</td>
                  <td>{nomeCategoria}</td>
                  <td>{qtdEstoque}</td>
                  <td>{valor}</td>
                  <td>
                    <BsTrashFill
                      onClick={() => deletar(id)}
                      style={{ cursor: "pointer" }}
                    />
                    <Link to={`/admin/produto/${id}`}>
                      <MdOutlineNoteAlt />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>
          <Link to="/admin">
            <button>Voltar</button>
          </Link>
          <Link to="/admin/produto-add">
            <button>Adicionar</button>
          </Link>
        </div>
      </AdminProdutoContainer>

      <Footer />
    </>
  );
}

export default Produto;
