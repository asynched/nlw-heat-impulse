import { useContext } from 'react'
import styled from 'styled-components'

import { AuthContext } from '@contexts/AuthContext'

import MessageList from '@components/MessageList'
import LoginBox from '@components/LoginBox'
import SendMessageForm from '@components/SendMessageForm'

const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <ContentWrapper className={!!user ? 'signed-in' : ''}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </ContentWrapper>
  )
}

export default App

const ContentWrapper = styled.main`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  &.signed-in::before {
    content: '';
    height: 100vh;
    width: 420px;
    background: url('src/assets/background.svg') no-repeat;
    background-size: cover;
    position: absolute;
    right: -200px;
    top: 0;
  }
`
