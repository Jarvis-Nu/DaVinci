import type { NextPage } from 'next'
import Head from 'next/head'
import Ecosystem from '../components/Ecosystem'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'

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
        <Introduction />
        <Ecosystem />
        <Footer />
      </main>
    </div>
  )
}

export default Home
