import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import "./style.css";

function AdminProdutoAdd({ header }) {

  async function handlerSubmit(event) {
    event.preventDefault();

    const novoProduto = {
      dataFabricacao: document.getElementById("dataFabricacao").value,
      descricao: document.getElementById("descricao").value,
      //fotoLink: document.getElementById("foto").value,
      idCategoria: Number(document.getElementById("idCategoria").value),
      idFuncionario: Number(document.getElementById("idFuncionario").value),
      nome: document.getElementById("nome").value,
      nomeCategoria: document.getElementById("nomeCategoria").value,
      nomeFuncionario: document.getElementById("nomeFuncionario").value,
      qtdEstoque: Number(document.getElementById("qtdEstoque").value),
      valor: Number(document.getElementById("valor").value),
    };
    console.log(novoProduto)
    /*
    try {
      await api.post("produto", novoProduto);
      alert("Verifique o cadastro do novo elemento");
    } catch (err) {
      console.log(err);
    }
    */
  }

  return (
    <>
      <Header header={{ ...header }} />

      <div className="admin-update">
        <div className="admin-update-content">
          <form onSubmit={(event) => handlerSubmit(event)} method="PUT">
            <h1>Novo produto</h1>
            <div className="add-produto-group">
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                name="nome"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="descricao"
                type="txt"
                placeholder="Descrição"
                name="descricao"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="valor"
                type="number"
                placeholder="Valor"
                name="valor"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="qtdEstoque"
                type="number"
                placeholder="Quantidade em estoque"
                name="qtdEstoque"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="idCategoria"
                type="number"
                placeholder="ID da categoria"
                name="idCategoria"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="nomeCategoria"
                type="txt"
                placeholder="Categoria"
                name="nomeCategoria"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="idFuncionario"
                type="number"
                placeholder="ID do funcionário"
                name="idFuncionario"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="nomeFuncionario"
                type="txt"
                placeholder="Funcionário"
                name="nomeFuncionario"
                required
              />
            </div>
            <div className="add-produto-group">
              <input
                id="dataFabricacao"
                type="text"
                placeholder="Data de fabricação"
                name="dataFabricacao"
                required
              />
            </div>

            {/*<input type="file" id="fotoLink" placeholder="Foto" />*/}

            <div className="add-produto-group two-button">
              <Link to="/admin/produto">
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

export default AdminProdutoAdd;
