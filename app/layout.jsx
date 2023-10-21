import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const poppins = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'tuto prisma mongodb',
  description: 'ooooh c\'est compliqué!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='max-w-4xl mx-auto px-5'>
          {children}
        </div>

      </body>
    </html>
  )
}
