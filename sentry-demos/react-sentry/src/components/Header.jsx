<<<<<<< HEAD
import react from 'react';
import {Navlink} from 'react-router-dom';
=======
import React from 'react';
import { NavLink } from 'react-router-dom';
>>>>>>> 5d3e3e29221962349866a756de3cf8daf44e9b98

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
<<<<<<< HEAD
        <Navlink to="/" className="link" activeClassName="active" exact>
          Books List
        </Navlink>
        <Navlink to="/add" className="link" activeClassName="active">
          Add Books
        </Navlink>
=======
        <NavLink to="/" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
>>>>>>> 5d3e3e29221962349866a756de3cf8daf44e9b98
      </div>
    </header>
  );
};

export default Header;