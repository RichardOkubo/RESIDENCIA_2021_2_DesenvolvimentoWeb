import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import { Container, Content, Bottom } from "./style";

function Footer() {
  const socialNetworks = [
    {
      icon: <FaFacebook />,
      url: "https://pt-br.facebook.com/",
      id: 1,
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/",
      id: 2,
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
      id: 3,
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/",
      id: 4,
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/",
      id: 5,
    },
  ];

  return (
    <Container>
      <Content>
        <h3>Sobre</h3>
        <p>
          Somos uma empresa de e-commerce fundada à partir de amigos que se
          conheceram na Residência de TIC/Software do Serratec (2.2021) de
          Petrópolis-RJ.
        </p>
        <ul>
          {socialNetworks.map(({ icon, url, id }) => {
            return (
              <li key={id}>
                <a target="_blank" rel="noreferrer" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </Content>
      <Bottom>
        <p>Copyright &copy; 2021 Grupo 1. All Rights Reserved</p>
      </Bottom>
    </Container>
  );
}

export default Footer;
