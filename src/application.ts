import 'dotenv/config'
import http from 'http'
import express from 'express'
import { Server as SocketIOServer } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const socketServer = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
  },
})

socketServer.on('connection', (socket) => {
  console.log('User connected')

  socket.emit('message', {
    message: 'Hello, client!',
  })
})

export { httpServer as default, app, socketServer }
