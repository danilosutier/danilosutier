import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Explorar",
    path: "/explore",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Jogos",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Projetos",
    path: "/mycart",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Sobre mim",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;