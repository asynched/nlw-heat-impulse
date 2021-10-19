import { PrismaClient, User } from '.prisma/client'
import { Optional } from '@lib/types'

export default class UserProfileService {
  constructor(private prismaClient: PrismaClient) {}

  public async getUserProfile(user_id: string): Promise<[Optional<User>, any]> {
    try {
      const user = await this.prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
      })

      return [user, null]
    } catch (error) {
      return [null, error]
    }
  }
}
