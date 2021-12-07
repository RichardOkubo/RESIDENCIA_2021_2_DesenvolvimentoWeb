import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {CartContainer, Table} from "./style";
import {BsTrashFill} from "react-icons/bs";
import {Link} from "react-router-dom";

function Cart({carrinho, removerDoCarrinho, header}) {
    console.log(carrinho);

    var somatorio = 0;

    return (
        <>
            <Header header={
                {
                    ...header
                }
            }/>

            <CartContainer>
                <h1>Carrinho de compras</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço (R$)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> {
                        carrinho.map((item, indice) => {
                            return (
                                <tr>
                                    <td>{
                                        item.id
                                    }</td>
                                    <td>{
                                        item.nome
                                    }</td>
                                    <td>{
                                        item.nomeCategoria
                                    }</td>
                                    <td>{
                                        item.valor.toFixed(2).replace(".", ",")
                                    }</td>
                                    <td>
                                        <BsTrashFill onClick={
                                                () => removerDoCarrinho(indice)
                                            }
                                            style={
                                                {cursor: "pointer"}
                                            }/>
                                    </td>
                                </tr>
                            );
                        })
                    }
                        <tr>
                            <td>
                              <h4>Total do Pedido:</h4>
                            </td>
                            <td>
                              {carrinho.forEach((item) =>{
                                somatorio += item.valor
                              } )}
                              <strong><h4>R$ {somatorio},00</h4></strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                    <button>Comprar</button>
                </div>
            </CartContainer>

            <Footer/>
        </>
    );
}

export default Cart;
