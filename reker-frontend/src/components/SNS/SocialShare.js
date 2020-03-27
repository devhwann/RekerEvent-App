import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faBlog  } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons'

const SocialShare = () => {
  return (
    <div>
           <p>Reker의 소셜 네트워크 입니다. 여러분들과 소통과 의견에 귀 기울이고 있습니다.</p>
      <FontAwesomeIcon icon={faInstagram}/>&nbsp; : &nbsp;Instagram
      <br/>
      <FontAwesomeIcon icon={faFacebook}/>&nbsp; : &nbsp;Facebook      
      <br/>
      {/* <FontAwesomeIcon icon={faBlog}/>&nbsp; : &nbsp; Blog       */}
    </div>
  );
};

export default SocialShare;