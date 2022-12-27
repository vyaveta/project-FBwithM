import Head from 'next/head'
import Image from 'next/image'
import HeadTags from '../components/metaData/HeadTags'
import css from '../styles/Index.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import nookies from 'nookies'
import { userCookieCheck } from '../utils/userCookieCheck'
import { pageNavigation } from '../utils/pageNavigation'
import baseUrl from '../utils/baseUrl'
import Sidemenu from '../components/Sidemenu/Sidemenu'
import HomeScrollArea from '../components/HomeScrollArea/HomeScrollArea'
import Search from '../components/Search/Search'

export default function Home({user,userFollowStats}) {
  const [theuser,setUser] = useState('')
  const [theuserFollowStats,setUserFollowStats] = useState('')



  const getUserData = async() => {
    const {data} = await axios.post(`${baseUrl}/api/getUserDetails`)
    if(data.status) {
      user = data.user
      userFollowStats = data.userFollowStats
      setUser(user)
      setUserFollowStats(userFollowStats)
      document.title = `Welcome ${user.name}`
    }
    console.log(user,'is the user')
  }

  useEffect(() => {
    if(!user) getUserData()
    else {
      setUser(user)
      setUserFollowStats(userFollowStats)
    }
  },[])
  console.log(user,'is the user and userFollowStats are' , userFollowStats)


  return (
    <div className={css.container}>
     <HeadTags />
     <Sidemenu user={theuser} />
     <HomeScrollArea>
      hello
     </HomeScrollArea>
     <Search />
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
