import React from 'react';
import Container from 'react-bootstrap/Container';
import Banner from '../../components/Banner';
import banner from '../../assets/bannerApropos.png';
import DropDownLarge from '../../components/DropDownLarge';

function Apropos() {
  return (
    <>
      <Container style={{ marginTop: '2%' }}>
        <Banner imageCover={banner} />
        <DropDownLarge />
      </Container>
    </>
  );
}

export default Apropos;
