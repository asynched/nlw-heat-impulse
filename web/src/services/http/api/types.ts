import { MessageType, UserType } from '@lib/types'

type AuthType = {
  token: string
}

export type APIMessageType = MessageType & { user: UserType }
export type AuthCallbackType = AuthType & { user: UserType }
