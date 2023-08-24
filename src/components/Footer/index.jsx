import React from 'react';
import Stack from 'react-bootstrap/Stack';
import logoFooter from '../../assets/logoFooter.png';

function Footer() {
  return (
    <div className="footer">
      <Stack
        gap={2}
        className="col-md-5 "
        style={{
          display: 'block',
          margin: 'auto',
        }}
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
