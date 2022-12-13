import HeadTags from '../components/metaData/HeadTags'
import '../styles/globals.css'
import nProgress from "nprogress";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  
  Router.onRouteChangeStart = () => nProgress.start()
  Router.onRouteChangeComplete = () => nProgress.done()
  Router.onRouteChangeError = () => nProgress.done()

  return (
    <>
    <HeadTags />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
