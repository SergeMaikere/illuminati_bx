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
                        bg-zinc-50 dark:bg-zinc-800 text-gray-800 dark:text-gray-200
                        text-sm md:text-base xl:text-lg
                        mx-auto 2xl:max-w-screen-[1366px] xl:max-w-6xl lg:max-w-5xl md:max-w-3xl md:px-10
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
