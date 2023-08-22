import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from '../../components/Banner';
import CardComponents from '../../components/Card';
import locationListe from '../../datas/locationListe.json';
import banner from '../../assets/bannerAccueil.png';
import Footer from '../../components/Footer';

function Accueil() {
  return (
    <div>
      <Container style={{ marginTop: '2%' }}>
        <div className="banner-accueil">
          <Banner imageCover={banner} />
        </div>
        <div className="cards">
          <Row xs={1} md={2} className="g-4">
            {locationListe.map(({
              id, title, cover, location,
            }) => (
              <CardComponents
                key={id}
                id={id}
                cover={cover}
                title={title}
                location={location}
              />
            ))}
          </Row>
        </div>
      </Container>
      <div className="footer-accueil">
        <Footer />
      </div>
    </div>
  );
}

export default Accueil;
