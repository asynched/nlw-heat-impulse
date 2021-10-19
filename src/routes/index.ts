import { Router } from 'express'
import UserAuthenticationModule from '@modules/user-authentication/UserAuthentication.module'
import authMiddleware from '@middlewares/AuthMiddleware'
import MessageModule from '@modules/messages/Message.module'
import UserProfileModule from '@modules/user-profile/UserProfile.module'

const router = Router()

// Auth not required
router.get('/auth/sign-in/github', UserAuthenticationModule.login)
router.get('/auth/sign-in/callback', UserAuthenticationModule.authCallback)
router.get('/users/:user_id', UserProfileModule.getUserProfile)

// Auth required
router.use(authMiddleware)
router.post('/messages', MessageModule.createMessage)
router.get('/messages', MessageModule.getMessages)

export default router
