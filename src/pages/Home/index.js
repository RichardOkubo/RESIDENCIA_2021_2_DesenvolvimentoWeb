import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardText, Container, ContainerCentral } from "./style";
import carrossel1 from "../../assets/carrossel1 .jpg";
import carrossel2 from "../../assets/carrossel2.jpg";
import carrossel3 from "../../assets/carrossel3.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Button } from "react-bootstrap";
import api from "../../services/api";

function Home({ header }) {

  const [produtos, setProdutos] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("produto");

      setProdutos(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header header={{...header}} />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1200}>
          <img
            style={{ width: "100%", height: "480" }}
            src={carrossel1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={1200}>
          <img
            style={{ width: "100%", height: "480" }}
            src={carrossel2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={1200}>
          <img
            style={{ width: "100%", height: "480" }}
            src={carrossel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <Container>
        <ContainerCentral>
          <Row xs={100} md={3} className="g-12">
            {produtos.map((produto) => (
              <Card key={produto?.id}>
                <div className="card" key={produto?.id}>
                  <img
                    className="card-img-top"
                    src={produto?.fotoLink}
                    alt="Card cap"
                  />

                  <div className="card-body">
                    <h4 className="card-title">{produto?.nome}</h4>
                    <CardText>{produto?.descricao}</CardText>
                    <Link
                      to={`/product/${produto?.id}`}
                      style={{ cursor: "pointer" }}
                    >
                      <Button>Ver detalhe</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </Row>
        </ContainerCentral>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
