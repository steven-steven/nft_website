import Head from 'next/head';
import PageOne from '../components/pageOne';
import PageTwo from '../components/pageTwo';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-primary">
      <Head>
        <title>Duck Duck Goose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageOne/>
      <PageTwo/>
    </div>
  )
}
