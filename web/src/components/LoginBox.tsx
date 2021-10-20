import { AuthContext } from '@contexts/AuthContext'
import { useContext, useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import styled from 'styled-components'

const LoginBox = () => {
  const { user } = useContext(AuthContext)

  return (
    <LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="http://localhost:3333/auth/sign-in/github" className="sign-in">
        <VscGithubInverted size="24" />
        Entrar com o GitHub
      </a>
    </LoginBoxWrapper>
  )
}

export default LoginBox

const LoginBoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #17171a url('src/assets/banner-girl.png') no-repeat center top;

  padding: 440px 80px 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 32px;
    line-height: 36px;
  }

  a.sign-in {
    background: #ffcd1e;
    margin-top: 32px;
    padding: 0 40px;
    height: 56px;
    color: #09090a;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`
