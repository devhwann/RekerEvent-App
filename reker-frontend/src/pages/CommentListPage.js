import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import CommentListContainer from '../containers/Comments/CommentListContainer';
import PaginationContainer from '../containers/Comments/PaginationContainer';
import CommentItemContainer from '../containers/Comments/CommentItemContainer';

const CommentListPage = () => {
  return (
    <>
      {/* <HeaderContainer /> */}
      {/* <CommentItemContainer/>  */}
      <CommentListContainer />
      <PaginationContainer />
    </>
  );
};

export default CommentListPage;
