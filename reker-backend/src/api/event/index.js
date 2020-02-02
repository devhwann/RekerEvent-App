import Router from 'koa-router';
import * as eventCtrl from './event.ctrl';

const event = new Router();

event.post('/register', eventCtrl.register);
// auth.get('/check', authCtrl.check);


export default event;
