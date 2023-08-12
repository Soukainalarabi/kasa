import React from 'react';
import Stack from 'react-bootstrap/Stack';
import logoFooter from '../../assets/logoFooter.png';

function Footer() {
  return (
    <div className="footer">
      <Stack
        gap={2}
        className="col-md-5 mx-auto"
        style={{ alignItems: 'center' }}
      >
        <div className="p">
          <img src={logoFooter} alt="logo du footer" />
        </div>
        <div className="p">© 2020 Kasa. All rights reserved</div>
      </Stack>
    </div>
  );
}
export default Footer;
