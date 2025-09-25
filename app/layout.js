import { Geist, Geist_Mono, Lato, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './../styles/globals.css'
import './../styles/grid.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const latoSans = Lato({
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato-sans',
  subsets: ['latin'],
})

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Tell Technologies',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Font Awesome Icons */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${latoSans.variable} ${interSans.variable} antialiased`}
      >
        <div className='relative'>
          <div className='absolute top-0 left-0 z-50 min-w-full'>
            <Header />
          </div>
        </div>
        {children}

        <Footer />
      </body>
    </html>
  )
}
