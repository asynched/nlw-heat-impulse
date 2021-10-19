import JWTTokenAdapter from '@lib/adapters/token/JWTTokenAdapter'
import MiddlewareHandler from './types'

const authMiddleware: MiddlewareHandler = (request, response, next) => {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      error: 'An auth token was not provided',
    })
  }

  const [_prefix, token] = authToken.split(' ')

  const [sub, error] = new JWTTokenAdapter().verifyToken(token)

  if (error) {
    return response.status(401).json({
      error: 'The provided JWT credential is invalid',
    })
  }

  request.user_id = sub as string

  next()
}

export default authMiddleware
