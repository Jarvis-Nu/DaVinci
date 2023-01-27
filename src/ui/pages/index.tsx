import type { NextPage } from 'next'
import Head from 'next/head'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amadeus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full'>
        <Hero page={"home"} />
        <GetStarted />
      </main>
    </div>
  )
}

export default Home
