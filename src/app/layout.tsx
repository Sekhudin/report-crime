import type { Metadata } from 'next';
import { Poppins as Font } from 'next/font/google';
import { cn } from 'src/util';
import { Toaster } from 'src/component/ui/toaster';
import './globals.css';

const poppins = Font({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Lawan.id',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={cn(`min-h-screen overflow-hidden bg-background font-sans antialiased`, poppins.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
