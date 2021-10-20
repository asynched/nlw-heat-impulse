import { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import styled from 'styled-components'

import { AuthContext } from '@contexts/AuthContext'
import { sendMessage } from '@services/http/api/messages'

const SendMessageForm = () => {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  const handleMessageSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!message.trim()) {
      return
    }

    await sendMessage(message)
    setMessage('')
  }

  return (
    <SendMessageFormWrapper>
      <button onClick={signOut} className="sign-out">
        <VscSignOut size="32" />
      </button>
      <header className="user-info">
        <div className="user-image">
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong>{user?.name}</strong>
        <span>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>
      <form className="message-form" onSubmit={handleMessageSubmit}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar mensagem</button>
      </form>
    </SendMessageFormWrapper>
  )
}

export default SendMessageForm

const SendMessageFormWrapper = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  button.sign-out {
    background: transparent;
    border: 0;
    color: #c4c4cc;
    position: absolute;
    left: 24px;
    top: 24px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  header.user-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    div.user-image {
      padding: 3px;
      background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
      border-radius: 50%;
      line-height: 0;

      & > img {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        border: 6px solid #121214;
      }
    }

    strong {
      font-size: 24px;
      line-height: 30px;
      margin-top: 16px;
    }

    span {
      display: flex;
      align-items: center;

      margin-top: 8px;
      color: #c4c4cc;

      svg {
        margin-right: 8px;
      }
    }
  }

  form.message-form {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-top: 48px;

    background: #202024;

    label {
      padding: 18px 24px;
      font-size: 20px;
      background: #29292e;
      font-weight: bold;
      text-align: left;
    }

    textarea {
      background: transparent;
      border: 0;
      padding: 24px;
      resize: none;
      height: 160px;
      color: #e1e1e6;
      font-size: 16px;
      line-height: 24px;

      &:focus {
        outline: 0;
      }

      &::placeholder {
        color: #8d8d99;
      }
    }

    button {
      background: #ff008e;
      margin: 24px;
      padding: 0 32px;
      height: 56px;
      color: #e1e1e6;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      border: 0;

      display: flex;
      align-self: flex-end;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
