import { UserType } from '@lib/types'
import API from '.'
import { APIMessageType } from './types'

export const getMessages = async () => {
  const { data } = await API.get<Array<APIMessageType>>('/messages')
  return data
}

export const sendMessage = async (message: string) => {
  const { data } = await API.post<APIMessageType>('/messages', {
    message,
  })

  return data
}
