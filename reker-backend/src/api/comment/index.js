import Router from 'koa-router';
import * as commentCtrl from './comment.ctrl';
// import checkLoggedIn from '../../lib/checkLoggedIn';


const comment = new Router();

// comments.get('/', commentsCtrl.list);
comment.post('/write',  commentCtrl.write);

// const comment = new Router(); // /api/posts/:id
// comments.get('/', commentsCtrl.read);
// comments.delete('/', checkLoggedIn, commentsCtrl.checkOwnPost, commentsCtrl.remove);
// comments.patch('/', checkLoggedIn, commentsCtrl.checkOwnPost, commentsCtrl.update);

// comments.use('/:id', commentsCtrl.getPostById, post.routes());

export default comment;


