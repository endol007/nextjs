import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { wrapper } from '../store/configureStore';

const TestApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(TestApp);
