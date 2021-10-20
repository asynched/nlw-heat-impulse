import { json, Request, Response } from 'express'
import MessageService from './Message.service'

export default class MessageController {
  constructor(private messageService: MessageService) {}

  public async createMessage(request: Request, response: Response) {
    const { message } = request.body
    const { user_id } = request

    const [result, error] = await this.messageService.createMessage(
      message,
      user_id
    )

    if (error) {
      return response.status(400).json({ error })
    }

    this.messageService.sendMessage(result)
    return response.status(201).json(result)
  }

  public async getMessages(request: Request, response: Response) {
    const [messages, error] = await this.messageService.getLatestMessages()

    if (error) {
      return response.status(400).json(error)
    }

    return response.status(200).json(messages)
  }
}
