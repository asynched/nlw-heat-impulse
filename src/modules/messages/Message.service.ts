import { PrismaClient, Message, User } from '.prisma/client'
import { Optional } from '@lib/types'
import { Server as SocketServer } from 'socket.io'

export default class MessageService {
  constructor(
    private prismaClient: PrismaClient,
    private socketServer: SocketServer
  ) {}

  async createMessage(
    text: string,
    user_id: string
  ): Promise<[Optional<Message & { user: User }>, any]> {
    try {
      const message = await this.prismaClient.message.create({
        data: {
          text,
          user_id,
        },
        include: {
          user: true,
        },
      })

      return [message, null]
    } catch (error) {
      return [null, error]
    }
  }

  async getLatestMessages(): Promise<
    [Optional<Array<Message & { user: User }>>, any]
  > {
    try {
      const messages = await this.prismaClient.message.findMany({
        take: 3,
        orderBy: {
          created_at: 'desc',
        },
        include: {
          user: true,
        },
      })

      return [messages, null]
    } catch (error) {
      return [null, error]
    }
  }

  sendMessage(message: any) {
    this.socketServer.emit('new_message', message)
  }
}
