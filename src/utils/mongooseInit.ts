import mongoose from 'mongoose'
import { MONGO_URI } from '@/config'

const options = {
  dbName: 'core',
}

export const mongooseConnect = async () => {
  return await mongoose.connect(MONGO_URI!, options)
}
