import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from '../../components/Banner';
import CardComponents from '../../components/Card';
import locationListe from '../../datas/locationListe.json';
import banner from '../../assets/bannerAccueil.png';

function Accueil() {
  return (
    <div>
      <Container style={{ marginTop: '2%' }}>
        <Banner imageCover={banner} />
        <div
          style={{
            backgroundColor: ' #F6F6F6',
            borderRadius: 25,
            marginTop: '5%',
          }}
        >
          <Row
            xs={1}
            md={2}
            className="g-4"
            style={{ paddingLeft: '9%', paddingTop: '4%', gap: '3% 2%' }}
          >
            {locationListe.map(({ id, title, cover, location }) => (
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
    </div>
  );
}

export default Accueil;
