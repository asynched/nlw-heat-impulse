import { PrismaClient } from '.prisma/client'
import ModuleFactory from '@lib/ModuleFactory'
import JWTTokenAdapter from '@lib/adapters/token/JWTTokenAdapter'
import UserAuthenticationController from './UserAuthentication.controller'
import UserAuthenticationService from './UserAuthentication.service'

const UserAuthenticationModule = ModuleFactory.getModule({
  controller: UserAuthenticationController,
  services: [
    {
      service: UserAuthenticationService,
      args: [new PrismaClient(), new JWTTokenAdapter()],
    },
  ],
})

export default UserAuthenticationModule
