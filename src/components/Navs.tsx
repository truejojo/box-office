import React from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/home", text: "Home" },
  { to: "/starred", text: "Starred" },
];

const Navs = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navs;
