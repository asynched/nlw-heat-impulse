import API from '.'
import { AuthCallbackType } from './types'

export const authenticateUser = async (code: string) => {
  const { data } = await API.get<AuthCallbackType>('auth/sign-in/callback', {
    params: {
      code,
    },
  })

  return data
}
