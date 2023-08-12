import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import bug from '../../assets/404.png';

function Erreur() {
  return (
    <Container style={{ marginTop: '10%' }}>
      <Image src={bug} alt="erreur" style={{ marginLeft: '26%' }} />
      <div
        className="mx-auto fs-1"
        style={{ color: '#FF6060', textAlign: 'center', marginTop: '3%' }}
      >
        Oups! La page que vous demandez n&lsquo;existe pas.
        <div className="home" style={{ marginTop: '5%' }}>
          <Link to="/">retourner à la page d&lsquo;Accueil</Link>
        </div>
      </div>
    </Container>
  );
}
export default Erreur;
