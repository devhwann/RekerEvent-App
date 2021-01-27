import React from 'react';
import styles from '../styles/MainPage.scss'
import classNames from "classnames/bind";
import Footer from '../components/common/Footer/Footer';
import MainTab from '../components/common/Tab/MainTab';
import HeaderContainer from '../containers/common/HeaderContainer';
import CommentForm from '../containers/Comment/CommentForm';
import CommentList from '../containers/Comments/CommentListContainer';
import PaginationContainer from '../containers/Comments/PaginationContainer';
import CommentListPage from './CommentListPage';



const cx = classNames.bind(styles);

const MainPage = () => {
  return (
    <div className={cx('wrap')}>
      <HeaderContainer/>
      <div className={cx('container')}>
        <div className={cx('content-wrap')}>
          <div className={cx('header')}>
            <h1 className="brand-logo">Re:ker<small>- 실시간 1:1 채용 구직 프로세스</small></h1>
          </div>
          <MainTab/>                    
      {/* <AuthForm1/> */}
        {/* <CommentList/> */}
      {/* <CommentListPage/> */}
      {/* <CommentForm/> */}
      {/* <PaginationContainer /> */}

      {/* <RegisterForm/> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MainPage;
