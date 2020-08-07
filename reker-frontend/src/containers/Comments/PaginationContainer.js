import React from 'react';
import Pagination from '../../components/comments/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';


const PaginationContainer = ({ location  }) => {
  const { lastPage, comments, loading } = useSelector(({ comments, loading }) => ({
    lastPage: comments.lastPage,
    comments: comments.comments,
    loading: loading['comments/LIST_COMMENTS'],
  }));

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!comments || loading) return null;

  // const { username } = match.params;

  // page가 없으면 1을 기본값으로 사용
  const { body, username ,page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      body={body}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
