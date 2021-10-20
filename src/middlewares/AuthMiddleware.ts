import ITokenAdapter from '@lib/adapters/token/ITokenAdapter'
import JWTTokenAdapter from '@lib/adapters/token/JWTTokenAdapter'
import MiddlewareHandler from './types'

const authMiddleware: MiddlewareHandler = (
  request,
  response,
  next,
  tokenAdapter: ITokenAdapter = new JWTTokenAdapter()
) => {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      error: 'An auth token was not provided',
    })
  }

  const [_prefix, token] = authToken.split(' ')

  const [sub, error] = tokenAdapter.verifyToken(token)

  if (error) {
    return response.status(401).json({
      error: 'The provided JWT credential is invalid',
    })
  }

  request.user_id = sub

  next()
}

export default authMiddleware
