import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/src/plugins/theme/theme';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '@/src/utlis/helpers/createEmotionCache';
import { Provider } from 'react-redux';
import store from '@/src/store/store';

const clientSideEmotionCache = createEmotionCache();

type Props = AppProps & {
  emotionCache: EmotionCache;
};

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: Props) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
