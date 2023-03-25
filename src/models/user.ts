const UserSchema = {
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
}

import { model, models, Schema } from 'mongoose'

const schema = new Schema(UserSchema)

export const User = models.user || model('user', schema)
