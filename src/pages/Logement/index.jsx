import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SlideShow from '../../components/SlideShow';
import locationListe from '../../datas/locationListe.json';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Footer from '../../components/Footer';
import '../../style.css';

function Logement() {
  const { id } = useParams();
  const filtredLocation = locationListe.find((lo) => lo.id === id);
  if (!filtredLocation) {
    return <Navigate to="/404" />;
  }
  const initialRating = filtredLocation.rating;
  const descriptionLocation = filtredLocation.description;
  const equipementLocation = filtredLocation.equipments;
  return (
    <>
      <Container style={{ marginTop: '2%' }}>
        <SlideShow pictures={filtredLocation.pictures} />
        <div className="information-appart">
          <Col className="flexDirection" style={{ marginTop: '1%' }}>
            <h1>{filtredLocation.title}</h1>
            <p className="locationAppart">{filtredLocation.location}</p>
            <div className="groupeTags">
              {filtredLocation.tags.map((tag) => (
                <Button key={tag} variant="outline-primary">{tag}</Button>
              ))}
            </div>
          </Col>
          <div className="tags-rating">
            <div className="userCard">
              <p>{filtredLocation.host.name}</p>
              <img
                className="userImage"
                src={filtredLocation.host.picture}
                alt={`host de ${filtredLocation.host.name}`}
              />
            </div>
            <div className="rating">
              <Rating initialRating={initialRating} />
            </div>
          </div>
        </div>
        <div className="descEquipemnt">
          <Collapse
            key="Description"
            className="dropDown"
            title="Description"
            description={descriptionLocation}
            style={{ width: '44%' }}
          />
          <Collapse
            key="Equipments"
            title="Equipments"
            description={equipementLocation.map((equipement) => (
              <div key={equipement} className="equipementDiv">{equipement}</div>
            ))}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Logement;
