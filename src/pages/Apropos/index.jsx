import React from 'react';
import Container from 'react-bootstrap/Container';
import Banner from '../../components/Banner';
import banner from '../../assets/bannerApropos.png';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';

function Apropos() {
  const description1 = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
  const description2 = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
  const description3 = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const description4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <>
      <Container style={{ marginTop: '2%' }}>
        <Banner imageCover={banner} />
        <div className="dropDowns">
          <Collapse
            title="Fiabilité"
            description={description1}
            style={{ fontSize: 24 }}
          />
          <Collapse
            title="Respect"
            description={description2}
          />
          <Collapse
            title="Service"
            description={description3}
          />
          <Collapse
            title="Sécurité"
            description={description4}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Apropos;
