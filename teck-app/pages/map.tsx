import Head from 'next/head'
import { Inter } from '@next/font/google'
import Topnav from '../components/topnav'
import SideNav from '../components/sidenav'
import Image from 'next/image'
import Footer from '../components/footer'



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
      <img className="rounded-md mx-auto" src="/map1.png" alt="Map showing current routing and stops" />
      </div>

      <Footer/>
      </main>
    </>
  )
}
