import Head from 'next/head'
import Image from 'next/image'
import HeadTags from '../components/metaData/HeadTags'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import nookies from 'nookies'
import { userCookieCheck } from '../utils/userCookieCheck'
import { pageNavigation } from '../utils/pageNavigation'
import baseUrl from '../utils/baseUrl'

export default function Home({user,userFollowStats}) {

  const getUserData = async() => {
    const {data} = await axios.post(`${baseUrl}/api/getUserDetails`)
    if(data.status) {
      user = data.user
      userFollowStats = data.userFollowStats
    }
    console.log(user,userFollowStats)
  }

  useEffect(() => {
    if(!user) getUserData()
  },[])
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
//    const res = await axios.get('http://localhost:3000/api/auth/')
   
//     // console.log(res.data,'is the last hope!')
//     return {posts: res.data}
//   }catch(e){
//     console.log(e)
//     return {errorLoading: true}
//   }
// }
