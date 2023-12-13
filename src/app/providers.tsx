'use client'
import { createContext, useContext, useState } from 'react'
import {NextUIProvider} from '@nextui-org/react'
import useLocalStorageState from "use-local-storage-state"

interface LoginContextType {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  isSigningUp: boolean;
  setSigningUp: (value: boolean) => void;
}

export const LoginContext = createContext<LoginContextType>({ isLoggedIn: false, setLoggedIn: () => {}, isSigningUp: false, setSigningUp: () => {} });

export function Providers({children}: { children: React.ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useLocalStorageState("LoginStatus", {defaultValue: false})
  const [isSigningUp, setSigningUp] = useState(false)

  const contextValue: LoginContextType = {
    isLoggedIn,
    setLoggedIn,
    isSigningUp,
    setSigningUp
  } 

  return (
    <LoginContext.Provider value={contextValue}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </LoginContext.Provider>
  )
}