"use client"
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'

type C = { children: ReactNode }

const AuthProvider: React.FC<C> = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default AuthProvider;
