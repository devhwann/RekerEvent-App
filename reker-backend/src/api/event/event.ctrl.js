import Joi from 'joi';
import Event from '../../models/event';

/*
  POST /api/auth/register
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/

export const eventregister = async ctx => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    name: Joi.string()
      // .alphanum()
      .min(2)
      .max(10)
      .required(),
    birthday: Joi.string().required(),
    phone: Joi.number().required(),
    userId: Joi.string().required(),
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { name, birthday, phone, userId } = ctx.request.body;
  // // username  이 이미 존재하는지 확인
  // const exists = await Event.findByphone(phone);
  // if (exists) {
    //   ctx.status = 409; // Conflict
    //   return;
    // }
    const event = new Event({
      name,
      birthday,
      phone,
      userId
    });
    try {
    await event.save(); // 데이터베이스에 저장
    ctx.body = event;
  } catch (e) {
    ctx.throw(500, e);
  }
};




/*
  GET /api/auth/check
*/
// export const check = async ctx => {
//   const { user } = ctx.state;
//   if (!user) {
//     // 로그인중 아님
//     ctx.status = 401; // Unauthorized
//     return;
//   }
//   ctx.body = user;
// };

