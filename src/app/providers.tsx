'use client'
import { createContext, useContext, useState } from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import useLocalStorageState from "use-local-storage-state"

const theme = extendTheme({
  colors: {
    customOrange: {
      500: "#FF6B35"
    },
    customGreen: {
      500: "#4CB5AB"
    }
  }
});

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
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </NextUIProvider>
    </LoginContext.Provider>
  )
}