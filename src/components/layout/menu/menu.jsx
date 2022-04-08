import React from "react";
import { Link } from "gatsby";
import { menu } from "../../../config";

const MainMenu = () => {
  const showItems = menu.map((item, i) => (
    <li key={i} className="inline-block mr-8">
      <Link
        to={item.url}
        className="hover:text-gray-700"
        activeClassName="text-gray-700"
      >
        {item.name}
      </Link>
    </li>
  ));
  return (
    <nav className="mb-6">
      <ol>{showItems}</ol>
    </nav>
  );
};

MainMenu.propTypes = {};

export { MainMenu };
