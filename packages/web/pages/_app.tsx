import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import useAsyncEffect from 'use-async-effect'
import axios from 'axios'

import Config from '../config'
import theme from '../src/theme'
import '../src/theme/styles.css'

const App = ({ Component, pageProps }: AppProps) => {
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  const router = useRouter()

  useEffect(() => {
    router.prefetch('/prefetched-route')
  }, [router])

  useAsyncEffect(async () => {
    console.log('on app loaded')

    // load some data
    // const { data } = await axios.get(`${Config.API_BASE_URL}`, { params: {} })
  }, [])

  const title = ''
  const description = ''

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
