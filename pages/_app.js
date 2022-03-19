import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/Theme';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css';
import Layout from '../components/layout/layout';

// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, 
                consistent, and simple baseline to
                build upon. */}

          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
