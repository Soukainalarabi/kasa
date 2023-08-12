import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container className="header" style={{ marginTop: '1%' }}>
      <Nav style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo du site"
            className="logo"
            style={{ width: 210, height: 68 }}
          />
        </Navbar.Brand>
        <Nav style={{ color: ' #FF6060', fontSize: '24px' }}>
          <Nav.Item style={{ paddingRight: 29 }}>
            {' '}
            <Link to="/">Accueil</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/apropos">A propos</Link>
          </Nav.Item>
        </Nav>
      </Nav>
    </Container>
  );
}
export default Header;
