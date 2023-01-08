import Head from 'next/head'
import { Inter } from '@next/font/google'
import Topnav from '../components/topnav'
import SideNav from '../components/sidenav'



export default function Home() {
  return (
    <>
      <Head>
        <title>Teck-App - Maps</title>
        <meta name="description" content="Into the looking glass" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className='color-s'>
      <Topnav/>
      <div className='flex'>      
      <SideNav/>
      </div>

      
      </main>
    </>
  )
}
