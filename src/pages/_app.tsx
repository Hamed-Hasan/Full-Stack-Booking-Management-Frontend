import '../dist/styles.css';  
import { Provider } from 'react-redux';
import store from '../redux/store';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <Navbar/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
