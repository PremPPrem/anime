import '@/styles/globals.scss'
import Layout from './components/Layout'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
          <Head>
        <title>Anime</title>
        <meta name="description" content="anime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Anime.ico" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
