import Router from 'koa-router';
import * as commentCtrl from './comment.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';


const comment = new Router();

// comments.get('/', commentsCtrl.list);
comment.post('/write',  commentCtrl.write);
// comment.get('/listComments',  commentCtrl.listComments);
comment.get('/list',  commentCtrl.list);
comment.get('/', commentCtrl.list)

// const comment = new Router(); // /api/posts/:id
// comments.get('/', commentsCtrl.read);
comment.delete('/', checkLoggedIn, commentCtrl.checkOwnComment, commentCtrl.remove);
comment.patch('/', checkLoggedIn, commentCtrl.checkOwnComment, commentCtrl.update);

// comments.use('/:id', commentsCtrl.getPostById, post.routes());

export default comment;


