import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'


const App = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
