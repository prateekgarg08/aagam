import type { NextApiRequest, NextApiResponse } from 'next'
import { adminAuth } from '../../../utils/firebaseAdminInit'
import { firebaseAuth } from '@/utils/firebaseInit'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { mongooseConnect } from '@/utils/mongooseInit'
import axios from 'axios'
import { verifyUser } from '@/utils/verifyUser'
import { User } from '@/models/user'
import { FIREBASE_CONFIG } from '@/config'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { body, method, query, headers } = req
  await mongooseConnect()

  if (method === 'POST') {
    if (query.mode === 'login') {
      try {
        const result: any = await signInWithEmailAndPassword(
          firebaseAuth,
          body.email,
          body.password
        )

        const data = {
          accessToken: result.user.stsTokenManager.accessToken,
        }

        res.status(200).json({
          message: 'Logged In Successfully',
          result: data,
        })
      } catch (err) {
        res.status(500).json({
          message: 'Error Occured',
          result: err,
        })
      }
    } else if (query.mode === 'signup') {
      try {
        const result: any = await createUserWithEmailAndPassword(
          firebaseAuth,
          body.email,
          body.password
        )
        const emailArr = result.user.email?.split('@')
        const userData = {
          _id: result.user.uid,
          name: result.user.displayName ? result.user.displayName : emailArr[0],
          profileImg: result.user.photoURL
            ? result.user.photoURL
            : 'https://ik.imagekit.io/furnerio/user_QAqZvC9sX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659697867940',

          email: result.user.email,
          phoneNumber: result.user.phoneNumber,
          accountCreatedAt: result.user.metadata.creationTime,
        }

        const user = new User(userData)

        await user.save()

        res.status(200).json({
          message: 'Account Created Successfully',
          result: result,
        })
      } catch (err) {
        res.status(500).json({
          message: 'Error Occured',
          result: err,
        })
      }
    } else if (query.mode === 'refresh') {
      try {
        const response = await axios({
          url: `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_CONFIG.apiKey}`,
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'post',
          data: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: body.refresh_token,
          }),
        })
        const data = {
          uid: response.data.uid,
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          tokenExpiry: response.data.expires_in,
        }
        await User.updateOne(
          { _id: response.data.uid },
          {
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            tokenExpiry: response.data.expires_in,
          }
        )
        res.status(200).json({
          message: 'Account Created Successfully',
          result: data,
        })
      } catch (err) {
        res.status(500).json({
          message: 'Error Occured',
          result: err,
        })
      }
    } else if (query.mode === 'google') {
      const result = await verifyUser(headers)
      const { email, name, user_id, picture }: any = result
      const isUserPresent = await User.find({ _id: user_id })

      if (isUserPresent.length) {
        res.status(200).json({
          message: 'Logged In Successfully',
          result: result,
        })
      } else {
        const emailArr = email?.split('@')
        const userData = {
          _id: user_id,
          name: name ? name : emailArr[0],
          profileImg: picture
            ? picture
            : 'https://ik.imagekit.io/furnerio/user_QAqZvC9sX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659697867940',

          email: email,
          phoneNumber: null,
        }

        const user = new User(userData)

        await user.save()

        res.status(200).json({
          message: 'Account Created Successfully',
          result: result,
        })
      }
    }
  } else {
    res.status(405).json({
      message: 'Method Not Allowed',
    })
  }
}
