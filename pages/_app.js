import HeadTags from '../components/metaData/HeadTags'
import '../styles/globals.css'
import nProgress from "nprogress";
import Router from "next/router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  
  Router.onRouteChangeStart = () => nProgress.start()
  Router.onRouteChangeComplete = () => nProgress.done()
  Router.onRouteChangeError = () => nProgress.done()

  return (
    <>
    <HeadTags />
    <Component {...pageProps} />
    <ToastContainer />
    </>
  )
}

export default MyApp
