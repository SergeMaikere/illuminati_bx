import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { ThemeContextProvider } from '../context/ThemeContext';
import ThemeProvider from './components/themeProvider/themeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Illuminati Bruxelles',
  description: 'Conspirer dans la bonne humeur',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <ThemeContextProvider>
                <ThemeProvider>
                    <div className={`
                        bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200
                        px-4 mx-auto 2xl:max-w-screen-xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl md:px-20
                    `}>
                        <Navbar/>
                        {children}
                        <Footer/>
                    </div>
                </ThemeProvider>
            </ThemeContextProvider>
        </body>
    </html>
  )
}
