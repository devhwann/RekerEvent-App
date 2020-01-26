import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const cx = classNames.bind(styles);

const textMap = {
  register: '회원가입',
  login: '로그인',
};

const Header = (type, onsubmit) => {
  const text = textMap[type];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div classNames="cx">
      
    </div>
  );
};

export default Header;
