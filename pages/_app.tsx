import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function AliceFramerMotion({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default AliceFramerMotion
