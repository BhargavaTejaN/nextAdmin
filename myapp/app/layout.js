import { Inter } from 'next/font/google'
import '../ui/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin DashBoard',
  description: 'Created By Using Nextjs 14.0.1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
