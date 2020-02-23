import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import palette from '../../lib/styles/palette';
import palette from '../../styles/palette';
import Button from '../common/Button';

const Ass = styled.a`
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
padding: 0.25rem 1rem;
color: white;
outline: none;
cursor: pointer;
background: ${palette.cyan[5]} !important;
width: 25% !important;
margin-top: 1rem;
`;



const EventSend = () => {
  return (
    <div>
      <p>
       현재 새로 오픈할 실시간 채용 프로세스 Reker 의 사전등록을 받고 있습니다. 
       <br/>
       사전등록시 다음과 같은 혜택이 제공 됩니다.
       <br/>
       <div>
          <br/>
          - 포인트 1000 증가           
          <br/>
          - 새로 구직활동시 새로운 매칭
          <br/>
          - 구인시 엄청난 혜택 증정
          </div>
          <br/>

        <Ass href="/event" class="eventBtn">
          사전등록 하러가기
        </Ass>
       </p>
    </div>
  );
};

export default EventSend;