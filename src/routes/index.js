import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import AdminPages from "../pages/AdminPages";
import AdminCategoria from "../pages/AdminPages/AdminCategoria";
import AdminCategoriaUpdate from "../pages/AdminPages/AdminCategoria/AdminCategoriaUpdate";
import AdminCategoriaAdd from "../pages/AdminPages/AdminCategoria/AdminCategoriaAdd";
import AdminProduto from "../pages/AdminPages/AdminProduto";
import AdminProdutoUpdate from "../pages/AdminPages/AdminProduto/AdminProdutoUpdate";
import AdminProdutoAdd from "../pages/AdminPages/AdminProduto/AdminProdutoAdd";
import AdminCliente from "../pages/AdminPages/AdminCliente";
import AdminClienteUpdate from "../pages/AdminPages/AdminCliente/AdminClienteUpdate";
import AdminClienteAdd from "../pages/AdminPages/AdminCliente/AdminClienteAdd";
import AdminFuncionario from "../pages/AdminPages/AdminFuncionario";
import AdminFuncionarioUpdate from "../pages/AdminPages/AdminFuncionario/AdminFuncionarioUpdate";
import AdminFuncionarioAdd from "../pages/AdminPages/AdminFuncionario/AdminFuncionarioAdd";

function Routes() {
  const [carrinho, setCarrinho] = useState([]);
  const [token, setToken] = useState("");


  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
  };

  useEffect(() => {
    const tokenAntigo = localStorage.getItem("token");

    if (tokenAntigo) {
      setToken(tokenAntigo);
    }
  }, []);

  const adicionarAoCarrinho = (item) => {
    //item.quantidade = 1;
    setCarrinho([...carrinho, item]);
  };

  const removerDoCarrinho = (indice) => {
    carrinho.splice(indice, 1);
    setCarrinho([...carrinho]);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} header={{ token, logout }} />}
        />
        <Route
          path="/login"
          exact
          render={(props) => <Login {...props} login={login} />}
        />
        <Route
          path="/create-account"
          exact
          render={(props) => (
            <CreateAccount {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/product/:id?"
          exact
          render={(props) => (
            <Product
              {...props}
              adicionarAoCarrinho={adicionarAoCarrinho}
              header={{ token, logout }}
            />
          )}
        />
        <Route
          path="/cart"
          exact
          render={(props) => (
            <Cart
              {...props}
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
              header={{ token, logout }}
            />
          )}
        />
        <Route
          path="/admin"
          exact
          render={(props) => <AdminPages {...props} header={{ token, logout }} />}
        />
        <Route path="/admin/categoria" exact component={AdminCategoria} />
        <Route
          path="/admin/categoria/:id?"
          exact
          render={(props) => (
            <AdminCategoriaUpdate {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/categoria-add"
          exact
          render={(props) => (
            <AdminCategoriaAdd {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/produto"
          exact
          render={(props) => (
            <AdminProduto {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/produto/:id?"
          render={(props) => (
            <AdminProdutoUpdate {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/produto-add"
          exact
          render={(props) => (
            <AdminProdutoAdd {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/cliente"
          exact
          render={(props) => (
            <AdminCliente {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/cliente/:id?"
          render={(props) => (
            <AdminClienteUpdate {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/cliente-add"
          exact
          render={(props) => (
            <AdminClienteAdd {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/funcionario"
          exact
          render={(props) => (
            <AdminFuncionario {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/funcionario/:id?"
          render={(props) => (
            <AdminFuncionarioUpdate {...props} header={{ token, logout }} />
          )}
        />
        <Route
          path="/admin/funcionario-add"
          exact
          render={(props) => (
            <AdminFuncionarioAdd {...props} header={{ token, logout }} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
