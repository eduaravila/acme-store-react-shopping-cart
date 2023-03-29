import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

type FetcherReturnType<T> = Promise<T>

type FetcherType = {
  <T = any>(url: string, options?: RequestInit): FetcherReturnType<T>
}

const fetcher: FetcherType = async (url, options) => {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // SWRConfig is a component that allows you to configure SWR globally.
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
