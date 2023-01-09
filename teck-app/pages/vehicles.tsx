import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";

// Components
import Topnav from '../components/header/topnav'
import SideNav from '../components/sidenav'
import Vehiclecard from '../components/vehicle-cards/vehiclecard'
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Teck-App - Vehicles</title>
        <meta name="description" content="Get details of your current fleet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='color-s'>
        <Topnav />
        <div className='flex'>
          <SideNav />
          <div className='flex items-end mx-auto my-5'>
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex items-end mx-auto my-5 mr-7'>
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex items-end mx-auto my-5 mr-7'>
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
          </div>
        </div>
        <Footer/>
      </main>
    </>
  )
}
