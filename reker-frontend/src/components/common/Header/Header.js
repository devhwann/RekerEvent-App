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
      <Button variant="primary" onClick={handleShow}>
        로그인
      </Button>
      <Button variant="primary" onClick={handleShow}>
        회원가입
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onsubmit={onsubmit}> */}
          아이디<input type="text" name="username" value="" />
          비밀번호<input type="text" name="password" value="" />
          {type === 'register' && <input type="text" name="passwordConfirm" />}
          {/* </form> */}
          Link
        </Modal.Body>
        <Modal.Footer>
          {/* {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
