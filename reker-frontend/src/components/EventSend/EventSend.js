import React from 'react';
import Button from '../common/Button';

const eventbtn = {
  marginTop: "1.5rem"
};


const EventSend = () => {
  return (
    <div>
      <p>
       현재 새로 오픈할 실시간 채용 프로세스 Reker 의 사전등록을 받고 있습니다. 
       <br/>
       사전등록시 다음과 같은 혜택이 제공 됩니다.
       <br/>
          <br/>
          - 포인트 1000 증가           
          <br/>
          - 새로 구직활동시 새로운 매칭
          <br/>
          - 구인시 엄청난 혜택 증정
          <br/>
       </p>
        <Button to="/event" cyan style={eventbtn}>
          사전등록
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button to="/register" cyan style={eventbtn}>
          회원가입
        </Button>
    </div>
  );
};

export default EventSend;