import React from "react";
import { MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

export const NavData = [
  {
    title: "Categoria",
    path: "/admin/categoria",
    icon: <MdCategory />,
    cName: "nav-text",
  },
  {
    title: "Funcionario",
    path: "/admin/funcionario",
    icon: <RiCustomerService2Fill />,
    cName: "nav-text",
  },
  {
    title: "Produto",
    path: "/admin/produto",
    icon: <FaProductHunt />,
    cName: "nav-text",
  },
  {
    title: "Cliente",
    path: "/admin/cliente",
    icon: <BsFillPersonFill />,
    cName: "nav-text",
  },

];
