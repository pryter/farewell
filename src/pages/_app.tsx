import "../styles/global.css"

import { Montserrat } from "@next/font/google"
import type { AppProps } from "next/app"

const montserrat = Montserrat({ subsets: ["latin"] })
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        .font-mont {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
