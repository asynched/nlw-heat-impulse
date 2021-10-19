import { Optional } from '@lib/types'
import { sign, verify } from 'jsonwebtoken'
import ITokenAdapter from './ITokenAdapter'

interface IPayload {
  sub: string
}

export default class JWTTokenAdapter implements ITokenAdapter {
  getToken(user: IUser) {
    return sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.SECRET_KEY as string,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )
  }

  verifyToken(token: string): [Optional<string>, any] {
    try {
      const { sub } = verify(
        token,
        process.env.SECRET_KEY as string
      ) as IPayload
      return [sub, null]
    } catch (error) {
      return [null, error]
    }
  }
}
