import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';
import styled from 'styled-components';

const FooterStyle = styled(MDBFooter)`
  position: relative;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterStyle color="indigo" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:{' '}
          <h5 className="text-monospace">
           {' '}
            NinoStyle Designed by Noah Osuolale with Stutord
          </h5>
        </MDBContainer>
      </div>
    </FooterStyle>
  );
};

export default Footer;
