import React from 'react';
import classNames from "classnames/bind";
import styles from './Candidate.scss';

const cx = classNames.bind(styles);

const Candidate = () => {
  return (
    <div className={cx('candidate')}>
      {/* <img src="Candidate.png" alt="" width="65%"/> */}
      <p>
      ▷ 구인탐색 > 계약 > 관리
          <br/>Step.1 : 개인 회원이 다양한 방법으로 구인 탐색을 하여 구직 신청합니다.
          <br/>Step.2 : 개인 회원과 기업 회원이 다시 한번 서로간의 정보를 확인합니다.
          <br/>Step.3 : 구인이 완료되면 실시간으로 관리할 수 있습니다.
  <br/>
          <br/>Key Point 1: 실시간 1:1 구인구직(서로간의 정보 확인)
          <br/>Key Point 2: 고용주가 서버를 통해 근로자에게 임금 지급(임금체불을 미연에 방지)
          <br/>Key Point 3: 근로보증 출근보증(약속, 책임)
      </p>
    </div>
  );
};

export default Candidate;