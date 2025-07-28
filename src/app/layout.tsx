import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Şevval Ercan - CV | Portfolio',
  description: 'Bilgisayar Mühendisliği Portföyü',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={cn(inter.className, 'bg-white text-gray-900 dark:bg-zinc-900 dark:text-white')}>
        {children}
      </body>
    </html>
  )
}
