import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
// import classNames from "classnames/bind";


// const cx = classNames.bind(styles);

const eventbtn = {
  marginTop: "1.5rem",
  margin: "0.5rem" 
};



const EventBtnWrap = styled.div`{

  @media only screen and (max-width: 1024px) {
    // margin-top: 4.9rem;
  }  
  @media only screen and (max-width: 600Px) {
    // margin-top: 2.6rem;
  }
  width: 100%;
  position:absolute;
  bottom: -30px;
}
}`

const EventContent = styled.p`{

  @media only screen and (max-width: 1024px) {
    display:none;
  }
  @media only screen and (max-width: 600Px) {
    display:none;

  }

}`

const EventSendWrap = styled.div`{

  width:100%;
  position: relative;
  hegight:250px;


}`

const evtClick = () => {
  alert('준비중입니다.');
}

const EventSend = () => {
  return (
    <EventSendWrap>
      <p>현재 새로 오픈할 실시간 채용 프로세스 Reker 의 사전등록을 받고 있습니다. 
       
       사전등록시 다양한 혜택이 제공 됩니다.</p>
       
      <EventContent>          
          - 포인트 1000 증가           
          <br/>
          - 새로 구직활동시 새로운 매칭
          <br/>
          - 구인시 엄청난 혜택 증정
          <br/>
       </EventContent>
       <div >
       <EventBtnWrap>
        <Button to="/" cyan style={eventbtn} onClick={evtClick}>
          사전등록
        </Button>                
        </EventBtnWrap>
        </div>
    </EventSendWrap>
  );
};

export default EventSend;