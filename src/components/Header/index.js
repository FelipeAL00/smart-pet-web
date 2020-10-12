import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Entregador">Entregador</Link>
          </li>
          <li>
            <Link to="/Pet-Shop">Petshop</Link>
          </li>
        </ul>

        <button>Entrar</button>
      </div>
    </Container>
  );
}

export default Header;
