"use client"
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'

type C = { children: ReactNode }

const AuthProvider = ({ children }: C) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default AuthProvider;
