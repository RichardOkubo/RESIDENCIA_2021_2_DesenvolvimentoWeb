import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineNoteAlt } from "react-icons/md";

import api from "../../../services/api";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdminFuncionarioContainer, Table } from "./style";

function Funcionario({ header }) {
  async function deletar(id) {
    const resposta = window.confirm(`Deseja deletar este elemento? (ID ${id})`);

    if (resposta) {
      try {
        await api.delete(`funcionario/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("funcionario");

      setFuncionarios(data);
    }

    fetchData();
  }, [funcionarios]);

  return (
    <>
      <Header header={{ ...header }} />

      <AdminFuncionarioContainer>
        <h1>Funcionários</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>CPF</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map(({ id, nome, cpf }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{nome}</td>
                  <td>{cpf}</td>
                  <td>
                    <BsTrashFill
                      onClick={() => deletar(id)}
                      style={{ cursor: "pointer" }}
                    />
                    <Link to={`/admin/funcionario/${id}`}>
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
          <Link to="/admin/funcionario-add">
            <button>Adicionar</button>
          </Link>
        </div>
      </AdminFuncionarioContainer>

      <Footer />
    </>
  );
}

export default Funcionario;
