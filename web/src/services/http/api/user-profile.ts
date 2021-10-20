import API from '.'
import { UserType } from '@lib/types'

export const getProfileData = async () => {
  const { data } = await API.get<UserType>('/profile')

  return data
}
