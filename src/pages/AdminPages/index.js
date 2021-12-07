import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavData } from "./NavData";
import { Nav, Text } from "./style";

function AdminPages({ header }) {
  return (
    <>
      <Header header={{ ...header }} />

      <Text>admin</Text>

      <Nav>
        <ul>
          {NavData.map((item, index) => {
            return (
              <Link to={item.path}>
                <li key={index}>
                  <span>
                    {item.icon} {item.title}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </Nav>
      <Footer />
    </>
  );
}

export default AdminPages;
