import React, { createContext, useContext, useState } from 'react'

const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env

import * as AuthSession from 'expo-auth-session'

type UserProps = {
  id: string
  name: string
  email: string
  photo?: string
}

type AuthContextData = {
  user: UserProps
  signInWithGoogle: () => void
}

type AuthorizationResponse = {
  params: {
    access_token: string
  }
  type: string
}

const AuthContextDefaultValues = {
  user: {
    id: '',
    name: '',
    email: '',
    photo: ''
  },
  signInWithGoogle: () => null
}

export const AuthContext = createContext<AuthContextData>(
  AuthContextDefaultValues
)

//Another way
//const AuthContext = createContext({} as IAuthContextData);

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const signInWithGoogle = async () => {
    try {
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl
      })) as AuthorizationResponse

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        )

        const userInfo = await response.json()

        const userLogged = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture
        }

        setUser(userLogged)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
