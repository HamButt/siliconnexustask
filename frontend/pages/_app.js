import "@/styles/globals.css";
import { Poppins } from 'next/font/google'
import { ConfigProvider } from 'antd';
import theme from '../theme/theme';


const poppins = Poppins({
    weight: '500',
    subsets: ['latin'],
  })

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme} >
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </ConfigProvider>
    )
}
