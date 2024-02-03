import "@/styles/globals.css";
import { Poppins } from 'next/font/google'
import {NextUIProvider} from "@nextui-org/react";


const poppins = Poppins({
    weight: '500',
    subsets: ['latin'],
  })

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
    )
}
