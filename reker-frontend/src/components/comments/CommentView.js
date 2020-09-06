import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/lib/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
// import Tags from '../COMMON/';
import { Helmet } from 'react-helmet-async';

const CommentViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const CommentHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const CommentContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const CommentViewer = ({ comment, error, loading, actionButtons, ownComment }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <CommentViewerBlock>존재하지 않는 포스트입니다.</CommentViewerBlock>;
    }
    return <CommentViewerBlock>오류 발생!</CommentViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !comment) {
    return null;
  }

  const { title, body, user, publishedDate  } = comment;
  return (
    <CommentViewerBlock>
      <Helmet>
        {/* <title>{title} - REACTERS</title> */}
      </Helmet>

      <CommentHead>
        {/* <h1>{title}</h1> */}
        <p>{body}</p>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        {/* <Tags tags={tags} /> */}
      </CommentHead>
      {actionButtons}
      {/* <CommentContent dangerouslySetInnerHTML={{ __html: body }} /> */}
    </CommentViewerBlock>
  );
};

export default CommentViewer;
