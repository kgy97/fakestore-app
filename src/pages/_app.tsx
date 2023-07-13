import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { useInitialCartData } from '@/hooks';

function App({ Component, pageProps }: AppProps) {
  useInitialCartData();

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);