import type { AppProps } from 'next/app'
import 'focus-visible'
import '@/styles/tailwind.css'

const CustomApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default CustomApp
