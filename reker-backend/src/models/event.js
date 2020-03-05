import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  name: String,
  birthday: String,
  phone: String, // 문자열로 이루어진 배열
  username: String
});

const Event = mongoose.model('Event', EventSchema);
export default Event;
