import { PrismaClient } from '.prisma/client'
import { socketServer } from 'application'
import ModuleFactory from '@lib/ModuleFactory'
import MessageController from './Message.controller'
import MessageService from './Message.service'

const MessageModule = ModuleFactory.getModule({
  controller: MessageController,
  services: [
    {
      service: MessageService,
      args: [new PrismaClient(), socketServer],
    },
  ],
})

export default MessageModule
