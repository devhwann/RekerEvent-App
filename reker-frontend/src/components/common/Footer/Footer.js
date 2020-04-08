import React from 'react';
import styled from 'styled-components';


const FooterContent = styled.div`

margin-left: 2rem;
padding-top: 2rem;
small {
  display: block;
  font-weight: 300;
  color: dimgray;

  &:nth-last-child(1) {
    padding-top: 0.5rem;
    font-size: 12px;
  }
}
`;

const Footer = () => {
  return (
    <FooterContent>
        <p>
          <small> 상호명 : Reker International</small>
          <small> 사업자번호 : 131-755-111232</small>
          <small> 주소 : 서울시 중랑구 용마산로 529</small>
          <small> Copyright © Reker INTERNATIONAL. All rights reserved.</small>          
        </p>
    </FooterContent>
  );
};

export default Footer;

