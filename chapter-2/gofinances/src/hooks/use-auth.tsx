import React, { createContext, useContext, useEffect, useState } from 'react'

type UserProps = {
  id: string
  name: string
  email: string
  photo?: string
}

type AuthContextData = {
  user: UserProps
}

const AuthContextDefaultValues = {
  user: {
    id: '',
    name: '',
    email: '',
    photo: ''
  }
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
  const user = {
    id: '123',
    name: 'Morpa',
    email: 'fake@email.com'
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
