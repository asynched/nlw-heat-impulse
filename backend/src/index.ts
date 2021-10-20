import cors from 'cors'
import { json } from 'express'
import httpServer, { app } from 'application'
import router from './routes'

app.use(cors())
app.use(json())
app.use('/', router)

const PORT = process.env.PORT || 3333

httpServer.listen(PORT, () => {
  console.log('Server is running on address: "http://localhost:%d" 🚀', PORT)
})
