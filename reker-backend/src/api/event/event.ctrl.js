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
    userId: Joi.string(),
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { name, birthday, phone, userId, username } = ctx.request.body;
  // // username  이 이미 존재하는지 확인  
    try {
      const exists = await User.findByUsername(username);
    if (exists) {
      console.log('계정이 있다요')
    } else {
      ctx.status = 409; // Conflict
      return;
    }
    const event = new Event({
      name,
      birthday,
      phone,
      userId
    });

    const User = new User({
      username
    })
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

