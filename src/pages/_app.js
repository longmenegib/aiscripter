import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ Component, pageProps }) {
  console.log('helloo')
  return (
    <>
      <Head>
        <meta name="title" content="AiScripter" />
        <meta name="description" content="Generate script for your video automatically" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}