import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/Button';
import styled from 'styled-components';
import classNames from "classnames/bind";
import styles from '../../styles/MainPage.scss';
import {  faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const eventbtn = {
  marginTop: "1.5rem",
  margin: "0.5rem" ,

};


const magin0 = {
   margin: "0rem"
  
};

const EventBtnWrap = styled.div`{

  // margin-top: 2.4rem;
  width: 100%;
  position:absolute;
  bottom: -30px;


  @media only screen and (max-width: 600px) {    
    // margin: 1.5rem 0;
  }  
}

}`

const SocialShareWrap = styled.div`{
    width:100%;
    position: relative;
    hegight:250px;

}`



const SocialShare = () => {
  return (
    <SocialShareWrap>
      <p >Reker의 소셜 네트워크 입니다. 여러분들과 소통과 의견에 귀 기울이고 있습니다.</p>
      <FontAwesomeIcon icon={faInstagram}/>&nbsp; : &nbsp;Instagram
      <br/>
      <FontAwesomeIcon icon={faFacebook}/>&nbsp; : &nbsp;Facebook      
      <br/>
      {/* <FontAwesomeIcon icon={faBlog}/>&nbsp; : &nbsp; Blog       */}
      <EventBtnWrap>
      <Button to="/register" cyan className={cx('btn-displayB')} style={eventbtn}>
          회원가입
        </Button>
    </EventBtnWrap>
    </SocialShareWrap>
  );
};

export default SocialShare;