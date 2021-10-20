import axios from 'axios'
import { PrismaClient, User } from '.prisma/client'
import ITokenAdapter from '@lib/adapters/token/ITokenAdapter'
import { MonadicError } from '@lib/types'

export default class UserAuthenticationService {
  public constructor(
    private prismaClient: PrismaClient,
    private tokenAdapter: ITokenAdapter
  ) {}

  async execute(
    code: string
  ): Promise<MonadicError<{ token: string; user: User }>> {
    try {
      const accessToken = await this.getAccessToken(code)
      const githubUserData = await this.getGithubUserData(accessToken)

      const { login, id, avatar_url, name } = githubUserData

      const user = await this.findUserByGithubID(id)
      if (user) {
        const token = this.tokenAdapter.getToken(user)
        return [{ token, user }, null]
      }

      const createdUser = await this.prismaClient.user.create({
        data: {
          login,
          name,
          avatar_url,
          github_id: id,
        },
      })

      const token = this.tokenAdapter.getToken(createdUser)

      return [{ token, user: createdUser }, null]
    } catch (error) {
      return [null, error]
    }
  }

  private async findUserByGithubID(githubID: number) {
    return await this.prismaClient.user.findFirst({
      where: {
        github_id: githubID,
      },
    })
  }

  private async getGithubUserData(accessToken: string) {
    const { data } = await axios.get<IGithubUserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return data
  }

  private async getAccessToken(code: string) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data } = await axios.post<IGithubAuthResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    })

    return data.access_token
  }
}

type IGithubAuthResponse = {
  access_token: string
}

type IGithubUserResponse = {
  avatar_url: string
  login: string
  id: number
  name: string
}
