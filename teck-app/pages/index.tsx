import Head from 'next/head'
import { Inter } from '@next/font/google'
import Topnav from '../components/topnav'
import SideNav from '../components/sidenav'
import { FunnelChart } from 'recharts/types/chart/FunnelChart'
import Averageschart from '../components/Avg-chart'
import Fuelchart from '../components/Fuel-mile-chart'
import Efficencytable from '../components/efficencytable'
import Footer from '../components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Teck-App - Dashboard</title>
        <meta name="description" content="Made by a team of 6." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='color-s'>
      <Topnav/>
      <div className='flex'>
        <SideNav/>
          <div className='rounded-lg'>
          </div>
          <div className='rounded-lg'>
          <Averageschart/>
          </div>
      </div>
      <div>
        <Efficencytable/>
      </div>
      <Footer/>
      </main>
    </>
  )
}
