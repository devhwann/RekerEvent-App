import Joi from 'joi';
import User from '../../models/user';
import Event from '../../models/event';



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
    username: Joi.string().allow('') // allow 공백 허용
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;                   
    ctx.body = result.error;
    return;
  }

  const { name, birthday, phone, username  } = ctx.request.body;
  // // username  이 이미 존재하는지 확인  
    try {
      const exists = await User.findByUsername(username);
        const event = new Event({
          name,
          birthday,
          phone,
          username
        });
    
        const user = new User({
          username,
        });
    if (exists) {
      console.log('계정이 있다요')
      // ctx.status = 200; // Confirm      
    } 
    else {
      if ([username].includes('')) {
        console.log('공백 입력');
        ctx.status = 406;
        // ctx.body = user.serialize();
        // ctx.body = event;
      } else {
        console.log("계정이 없습니다.")
        ctx.status = 408; // Confirm
        return;
      }
    } 
    ctx.body = user.serialize();
    await event.save(); // 데이터베이스에 저장
    ctx.body = event;
  } catch (e) {
    console.log("asd")
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

