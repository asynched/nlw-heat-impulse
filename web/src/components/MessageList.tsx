import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SocketIO from 'socket.io-client'

import { APIMessageType } from '@services/http/api/types'
import { getMessages } from '@services/http/api/messages'

import logoImage from '@assets/logo.svg'

const socket = SocketIO('http://localhost:3333')

const messageQueue: APIMessageType[] = []

socket.on('new_message', (message: APIMessageType) => {
  messageQueue.push(message)
})

const MessageList = () => {
  const [messages, setMessages] = useState<Array<APIMessageType>>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setMessages((previousMessages) =>
          [messageQueue[0], previousMessages[0], previousMessages[1]].filter(
            Boolean
          )
        )

        messageQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  })

  useEffect(() => {
    const getData = async () => {
      const messages = await getMessages()
      setMessages(messages)
    }

    getData()
  }, [])

  return (
    <MessageListWrapper>
      <img src={logoImage} alt="Do While 2021" />
      <ul className="message-list">
        {messages.map((message) => (
          <li key={message.id} className="message">
            <p>{message.text}</p>
            <div className="user">
              <div className="user-image">
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </MessageListWrapper>
  )
}

export default MessageList

const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-space-between;
  align-items: flex-start;

  & > img {
    height: 28px;
    margin: 32px 0;
  }

  ul.message-list {
    list-style: none;

    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 40px;
    justify-content: center;

    & > li.message {
      max-width: 440px;

      &:nth-child(2) {
        margin-left: 80px;
      }

      & > p {
        font-size: 20px;
        line-height: 28px;
      }

      div.user {
        margin-top: 16px;
        display: flex;
        align-items: center;

        div.user-image {
          padding: 2px;
          background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
          border-radius: 50%;
          line-height: 0;

          & > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 4px solid #121214;
          }
        }

        & > span {
          font-size: 16px;
          margin-left: 12px;
        }
      }
    }
  }
`
