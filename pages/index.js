import Head from 'next/head';
import Header from '../components/header';
import Banner from '../components/banner';
import CountDown from '../components/countDown';
import Intro from '../components/intro';
import Story from '../components/story';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Roadmap from '../components/roadmap'
import Constant from '../components/constants';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Head>
        <title>Duck Duck Goose</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header twitter={Constant.TWITTER} discord={Constant.DISCORD} opensea={Constant.OPENSEA} etherscan={Constant.ETHERSCAN}/>
      <Banner/>
      <CountDown/>
      <Intro/>
      <Story/>
      <Roadmap/>
      <FAQ twitter={Constant.TWITTER} discord={Constant.DISCORD}/>
      <Footer twitter={Constant.TWITTER} discord={Constant.DISCORD} opensea={Constant.OPENSEA} etherscan={Constant.ETHERSCAN}/>
    </div>
  )
}
