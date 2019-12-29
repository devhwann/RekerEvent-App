import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl';
// import checkLoggedIn from '../../lib/checkLoggedIn';


const comments = new Router();

// comments.get('/', commentsCtrl.list);
comments.post('/',  commentsCtrl.write);

// const comment = new Router(); // /api/posts/:id
// comments.get('/', commentsCtrl.read);
// comments.delete('/', checkLoggedIn, commentsCtrl.checkOwnPost, commentsCtrl.remove);
// comments.patch('/', checkLoggedIn, commentsCtrl.checkOwnPost, commentsCtrl.update);

// comments.use('/:id', commentsCtrl.getPostById, post.routes());

export default comments;


