import HeadTags from '../components/metaData/HeadTags'
import '../styles/globals.css'
import nProgress from "nprogress";
import Router from "next/router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {parseCookies,destroyCookie} from 'nookies'
import { pageNavigation } from '../utils/pageNavigation';
import { userLoginRoute } from '../utils/userRoutes';
import { useEffect } from 'react';
import { userCheckGetRequest } from '../utils/authUser';
import baseUrl from '../utils/baseUrl';

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

MyApp.getInitialProps = async({Component,ctx}) => {
  // try{
    const {FreeBirdUserToken} = parseCookies(ctx)
    const protectedRoutes = ctx.pathname === '/'
    let pageProps = {}

    if(!FreeBirdUserToken){
      protectedRoutes && pageNavigation(ctx,'/login')
    }else{
      if(Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

      try{
        const res = await axios.post(`${baseUrl}/api/getUserDetails`)
        console.log(res,'is the res from axios')
        const {user,userFollowStats} = res.data
        if(user && !protectedRoutes) pageNavigation(ctx,'/') // If the user is already logged in and tries to access login/signup page it will redirect user to the home page
        pageProps.user = user
        pageProps.userFollowStats = userFollowStats
      }catch(e){
        console.log(e.message,'is the error')
        destroyCookie(ctx,'FreeBirdUserToken')
        pageNavigation(ctx,'/login')
      }
    }
    return {pageProps}
  // }catch(e){
  //   console.log(e,'is the error in the my app ip')
  // }
}

export default MyApp
