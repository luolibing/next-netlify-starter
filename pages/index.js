import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AnkerCloud go go go! Netlify demo By Kroos.luo" />
      </main>

      <Footer />
    </div>
  )
}
