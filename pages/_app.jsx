import Head from 'next/head';
import Provider from '../context/Provider';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>SP-Sam | Discord clone</title>
        <link rel="shortcut icon" href="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-discord-chat-for-social-gaming-between-peers-logo-color-tal-revivo.png" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
