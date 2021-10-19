import { PrismaClient } from '.prisma/client'
import ModuleFactory from '@lib/ModuleFactory'
import UserProfileController from './UserProfile.controller'
import UserProfileService from './UserProfile.service'

const UserProfileModule = ModuleFactory.getModule({
  controller: UserProfileController,
  services: [
    {
      service: UserProfileService,
      args: [new PrismaClient()],
    },
  ],
})

export default UserProfileModule
