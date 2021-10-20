import { Request, Response } from 'express'
import UserProfileService from './UserProfile.service'

export default class UserProfileController {
  public constructor(private userProfileService: UserProfileService) {}

  public async getUserProfile(request: Request, response: Response) {
    const user_id = request.params.user_id
    const [user, error] = await this.userProfileService.getUserProfile(user_id)

    if (error) {
      return response.status(400).json({ error })
    }

    if (!user) {
      return response
        .status(404)
        .json({ message: "User with the provided ID wasn't found" })
    }

    return response.status(200).json(user)
  }
}
