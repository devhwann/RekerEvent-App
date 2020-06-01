import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import classNames from "classnames/bind";
import styles from '../../styles/MainPage.scss'

const cx = classNames.bind(styles);
const eventbtn = {
  marginTop: "1.5rem",
  margin: "0.5rem" 
};


const EventBtnWrap = styled.div`{

  @media only screen and (max-width: 600px) {
    margin: 1.5rem 0;
  }  
}
}`

const EventContent = styled.p`{

  @media only screen and (max-width: 600px) {
    display:none;
  }

}`


const EventSend = () => {
  return (
    <div>
       현재 새로 오픈할 실시간 채용 프로세스 Reker 의 사전등록을 받고 있습니다. 
       <br/>
       사전등록시 다양한 혜택이 제공 됩니다.
       <br/>
      <EventContent>
          <br/>
          - 포인트 1000 증가           
          <br/>
          - 새로 구직활동시 새로운 매칭
          <br/>
          - 구인시 엄청난 혜택 증정
          <br/>
       </EventContent>
       <EventBtnWrap>
        <Button to="/event" cyan style={eventbtn}>
          사전등록
        </Button>        
        <Button to="/register" cyan style={eventbtn} className={cx('btn-display')}>
          회원가입
        </Button>
        </EventBtnWrap>
    </div>
  );
};

export default EventSend;