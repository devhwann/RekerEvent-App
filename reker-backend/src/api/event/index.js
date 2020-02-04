import Router from 'koa-router';
import * as eventCtrl from './event.ctrl';

const event = new Router();

event.post('/eventregister', eventCtrl.eventregister);
// auth.get('/check', authCtrl.check);


export default event;
