import Head from 'next/head';
import Header from '../components/header';
import Banner from '../components/banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Duck Duck Goose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>
    </div>
  )
}
