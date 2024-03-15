"use client"

import React, { createContext, useContext, ReactNode, useState } from "react"

// Define the shape of the context data
interface AuthContextType {
  user: string | null
  login: (user: string) => void
  logout: () => void
}

// Create the context with a default value
// We're using `undefined` here because we'll provide the actual value at the top level of our app
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a provider component
interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null)

  const login = (user: string) => setUser(user)
  const logout = () => setUser(null)

  // The value that will be given to the context
  const value = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
