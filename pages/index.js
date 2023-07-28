import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>I'm Gerson</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  )
}
