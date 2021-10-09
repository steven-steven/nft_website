import Head from 'next/head';
import Header from '../components/header';
import Banner from '../components/banner';
import Intro from '../components/intro';
import Story from '../components/story';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Constant from './constants';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Head>
        <title>Duck Duck Goose</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header twitter={Constant.TWITTER} opensea={Constant.OPENSEA}/>
      <Banner mint={Constant.MINT}/>
      <Intro/>
      <Story/>
      <FAQ twitter={Constant.TWITTER}/>
      <Footer/>
    </div>
  )
}
