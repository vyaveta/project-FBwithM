import Head from 'next/head'
import Image from 'next/image'
import HeadTags from '../components/metaData/HeadTags'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import nookies from 'nookies'
import { userCookieCheck } from '../utils/userCookieCheck'
import { pageNavigation } from '../utils/pageNavigation'

export default function Home({user,userFollowStats}) {
    console.log(user,'is the user and userFollowStats are' , userFollowStats)
  return (
    <div className={styles.container}>
     <HeadTags />
     <h1>Free bird</h1>
     
    </div>
  )
}

// Home.getInitialProps = async (ctx) => {
//   try{
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts',{ 
//       headers: { "Accept-Encoding": "gzip,deflate,compress" } 
//   })
//     return {posts: res.data}
//   }catch(e){
//     console.log(e)
//     return {errorLoading: true}
//   }
// }