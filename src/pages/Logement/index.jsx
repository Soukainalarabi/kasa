import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route, useParams } from 'react-router-dom';
import SlideShow from '../../components/SlideShow';
import locationListe from '../../datas/locationListe.json';

function Logement() {
  let { id } = useParams();
  const filtredLocation = locationListe.find((lo) => lo.id == id);
  if (!filtredLocation) {
    console.log('not');
  }
  return (
    <Container style={{ marginTop: '2%' }}>
      <SlideShow pictures={filtredLocation.pictures} />
      
    </Container>
  );
}
export default Logement;
