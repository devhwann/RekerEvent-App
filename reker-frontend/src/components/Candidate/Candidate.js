import React from 'react';
import classNames from "classnames/bind";
import styles from './Candidate.scss';

const cx = classNames.bind(styles);

const Candidate = () => {
  return (
    <div className={cx('candidate')}>
      근로자 내용
    </div>
  );
};

export default Candidate;