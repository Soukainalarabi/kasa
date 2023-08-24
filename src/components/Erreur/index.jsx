import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import bug from '../../assets/404.png';

function Erreur() {
  return (
    <Container style={{ marginTop: '10%' }}>
      <Image src={bug} alt="erreur" className="erreur-img" />
      <div
        className="mx-auto"
        style={{ color: '#FF6060', textAlign: 'center', marginTop: '3%' }}
      >
        <p> Oups! La page que </p>
        <p>vous demandez n&lsquo;existe pas.</p>
      </div>
      <div className="home" style={{ marginTop: '5%' }}>
        <Link to="/">retourner à la page d&lsquo;Accueil</Link>
      </div>
    </Container>
  );
}
export default Erreur;
