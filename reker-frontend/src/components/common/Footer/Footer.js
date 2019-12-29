import React from 'react';
import classNames from "classnames/bind";
import styles from './Footer.scss';

const cx = classNames.bind(styles);


const Footer = () => {
  return (
    <div className={cx('footer')}>
        <p>
          <small> 상호명 : Reker International</small>
          <small> 사업자번호 : 131-755-111232</small>
          <small> 주소 : 서울시 중랑구 용마산로 529</small>
          <small> Copyright © Reker INTERNATIONAL. All rights reserved.</small>          
        </p>
    </div>
  );
};

export default Footer;

