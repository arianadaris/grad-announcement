import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ariana Rajewski | ASU Graduation</title>
        <meta name="description" content="Ariana Rajewski ASU Graduation Announcement" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
