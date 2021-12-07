import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineNoteAlt } from "react-icons/md";

import api from "../../../services/api";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdminClienteContainer, Table } from "./style";

function Cliente({ header }) {
  async function deletar(id) {
    const resposta = window.confirm(`Deseja deletar este elemento? (ID ${id})`);

    if (resposta) {
      try {
        await api.delete(`cliente/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("cliente");

      setClientes(data);
    }

    fetchData();
  }, [clientes]);

  return (
    <>
      <Header header={{ ...header }} />

      <AdminClienteContainer>
        <h1>Clientes</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Data de Nasc.</th>
              <th>CEP</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(
              ({ id, nome, usuario, email, cpf, dataNascimento, endereco }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{usuario}</td>
                    <td>{email}</td>
                    <td>{cpf}</td>
                    <td>{dataNascimento}</td>
                    <td>{endereco?.cep}</td>
                    <td>
                      <BsTrashFill
                        onClick={() => deletar(id)}
                        style={{ cursor: "pointer" }}
                      />
                      <Link to={`/admin/cliente/${id}`}>
                        <MdOutlineNoteAlt />
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
        <div>
          <Link to="/admin">
            <button>Voltar</button>
          </Link>
          <Link to="/admin/cliente-add">
            <button>Adicionar</button>
          </Link>
        </div>
      </AdminClienteContainer>

      <Footer />
    </>
  );
}

export default Cliente;
