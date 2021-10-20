import { Request, Response } from 'express'
import { Optional } from '@lib/types'
import UserAuthenticationService from './UserAuthentication.service'

export default class UserAuthenticationController {
  public constructor(
    private userAuthenticationService: UserAuthenticationService
  ) {}

  public login(request: Request, response: Response) {
    return response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    )
  }

  public async authCallback(request: Request, response: Response) {
    const code = request.query.code as Optional<string>

    if (!code) {
      return response
        .status(401)
        .json({ message: "Authentication code wasn't provided" })
    }

    const [data, error] = await this.userAuthenticationService.execute(code)

    if (error) {
      return response.status(401).json({ error })
    }

    return response.status(200).json(data)
  }
}
