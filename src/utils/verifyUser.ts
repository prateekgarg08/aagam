import { adminAuth } from './firebaseAdminInit'

export const verifyUser = async (headers: any) => {
  if (headers && headers.authorization) {
    const accessToken = headers.authorization.split(' ')[1]
    const user = await adminAuth.verifyIdToken(accessToken!)

    return user
  } else return null
}
