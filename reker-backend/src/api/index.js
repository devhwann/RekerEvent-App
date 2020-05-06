import Router from 'koa-router';
import posts from './posts';
import comment from './comment';
import auth from './auth';
import event from './event';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/event', event.routes());
api.use('/comment', comment.routes());
api.use('/auth', auth.routes());

// 라우터를 내보냅니다.
export default api;
