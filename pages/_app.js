import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Toaster />
    </RecoilRoot>
  )

}

export default MyApp
