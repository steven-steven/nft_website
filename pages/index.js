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
      {/* <div className="border-4 border-solid border-black px-6 pt-4 md:pt-4 text-s md:text-2xl">We apologize. Something went wrong with minting through the website. You can mint directly through Etherscan for now or wait a couple of hours until our devs resolve the issue. Thank you for your patience. </div> */}

      {/* <CountDown/> */}
      <Intro/>
      <Story/>
      <Roadmap/>
      <FAQ twitter={Constant.TWITTER} discord={Constant.DISCORD}/>
      <Footer twitter={Constant.TWITTER} discord={Constant.DISCORD} opensea={Constant.OPENSEA} etherscan={Constant.ETHERSCAN}/>
    </div>
  )
}
