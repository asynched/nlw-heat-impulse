import { MonadicError, Optional } from '@lib/types'

export default interface ITokenAdapter {
  getToken(user: IUser): string
  verifyToken(token: string): MonadicError<string>
}
