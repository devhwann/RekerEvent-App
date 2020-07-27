import React from 'react';
import styles from '../styles/MainPage.scss'
import classNames from "classnames/bind";
import Footer from '../components/common/Footer/Footer';
import MainTab from '../components/common/Tab/MainTab';
import HeaderContainer from '../containers/common/HeaderContainer';
// import RegisterForm1 from '../containers/Auth1/RegisterForm1';
import CommentForm from '../containers/Comment/CommentForm';
import CommentList from '../containers/Comments/CommentListContainer';
// import CommentList from '../components/comments/CommentList';
// import AuthForm1 from '../components/Auth/AuthForm1';


const cx = classNames.bind(styles);

const MainPage = () => {
  return (
    <div className={cx('wrap')}>
      <HeaderContainer/>
      <div className={cx('container')}>
        <div className={cx('content-wrap')}>
          <div className={cx('header')}>
            <h1 className="brand-logo">Reker<small>- 실시간 1:1 채용 구직 프로세스</small></h1>
          </div>
          <MainTab/>                    
      {/* <AuthForm1/> */}
        <CommentList/>
      <CommentForm/>
      {/* <RegisterForm/> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MainPage;
