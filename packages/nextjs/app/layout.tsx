import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Models.dev - AI Model Database',
  description: 'A comprehensive open-source database of AI model specifications, pricing, and capabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
