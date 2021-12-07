import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineNoteAlt } from "react-icons/md";

import api from "../../../services/api";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdminCategoriaContainer, Table } from "./style";

function Categoria({ header }) {
  async function deletar(id) {
    const resposta = window.confirm(`Deseja deletar este elemento? (ID ${id})`);

    if (resposta) {
      try {
        await api.delete(`categoria/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("categoria");

      setCategorias(data);
    }

    fetchData();
  }, [categorias]);

  return (
    <>
      <Header header={{ ...header }} />

      <AdminCategoriaContainer>
        <h1>Categorias</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categorias.map(({ id, nome, descricao }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{nome}</td>
                  <td>{descricao}</td>

                  <td>
                    <BsTrashFill
                      onClick={() => deletar(id)}
                      style={{ cursor: "pointer" }}
                    />
                    <Link to={`/admin/categoria/${id}`}>
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
          <Link to="/admin/categoria-add">
            <button>Adicionar</button>
          </Link>
        </div>
      </AdminCategoriaContainer>

      <Footer />
    </>
  );
}

export default Categoria;
