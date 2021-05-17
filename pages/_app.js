import 'antd/dist/antd.css';
import '../styles/globals.css';
// Order of imports matters.
// Note: Components use inline styles with Next.js' built-in styled-jsx library

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
