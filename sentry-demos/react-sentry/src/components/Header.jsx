import react from 'react';
import {Navlink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <Navlink to="/" className="link" activeClassName="active" exact>
          Books List
        </Navlink>
        <Navlink to="/add" className="link" activeClassName="active">
          Add Books
        </Navlink>
      </div>
    </header>
  );
};

export default Header;