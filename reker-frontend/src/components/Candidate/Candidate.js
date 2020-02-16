import React from 'react';
import classNames from "classnames/bind";
import styles from './Candidate.scss';

const cx = classNames.bind(styles);

const Candidate = () => {
  return (
    <div className={cx('candidate')}>
      <img src="Candidate.png" alt="" width="65%"/>
    </div>
  );
};

export default Candidate;