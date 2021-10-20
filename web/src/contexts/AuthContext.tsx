import { createContext, useEffect, useState } from 'react'
import { UserType, Optional } from '@lib/types'
import { authenticateUser } from '@services/http/api/user-authentication'
import { setAPIToken } from '@services/http/api'
import { getProfileData } from '@services/http/api/user-profile'
import {
  clearLocalStorageToken,
  getLocalStorageToken,
  setLocalStorageToken,
} from '@services/browser/localStorage'

type AuthContextDataType = {
  user: Optional<UserType>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextDataType)

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Optional<UserType>>(null)

  const handleSignIn = async (code: string) => {
    const { token, user } = await authenticateUser(code)

    setLocalStorageToken(token)
    setAPIToken(token)
    setUser(user)
  }

  const handleSignOut = () => {
    setUser(null)
    clearLocalStorageToken()
  }

  const handleGetProfileData = async () => {
    const profileData = await getProfileData()
    setUser(profileData)
  }

  useEffect(() => {
    const token = getLocalStorageToken()

    if (!token) {
      return
    }

    setAPIToken(token)
    handleGetProfileData()
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    const urlParams = new URLSearchParams(url.search)

    const githubCode = urlParams.get('code')

    if (githubCode) {
      handleSignIn(githubCode)
      window.history.pushState(null, '', window.location.origin)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
