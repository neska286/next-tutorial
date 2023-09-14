"use client"
import { SessionProvider } from 'next-auth/react';
import React, { FC, ReactElement } from 'react'

interface Props {
    children: ReactElement;
  }

const AuthProvider: FC<Props> = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider