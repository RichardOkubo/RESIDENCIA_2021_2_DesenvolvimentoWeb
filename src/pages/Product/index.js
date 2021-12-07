import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DetailProduct } from "./style";

function Product({ adicionarAoCarrinho, header }) {

  const {id} = useParams();
  const [product, setProduto] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`produto/${id}`)
      
      setProduto(data);
    }
    fetchData();
  }, [id])
  
  function handlerAdicionarAoCarrinho() {
    adicionarAoCarrinho(product)
    alert("Produto adicionado com sucesso")
  }

  return (
    <>
      <Header header={{...header}} />

      <DetailProduct>
        <h2>{product?.nome}</h2>
        <img src={product?.fotoLink} alt="foto do produto" />
        <h4>{product?.descricao}</h4>
        <h3>R$ {product?.valor.toFixed(2).replace('.', ',')}</h3>
        <div>
          <Link to="/" >
            <button>Voltar</button>
          </Link>
          <button onClick={handlerAdicionarAoCarrinho}>Add carrinho</button>
        </div>
      </DetailProduct>
      <Footer />
    </>
  );
}


export default Product;
