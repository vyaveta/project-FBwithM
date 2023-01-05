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
import { getAllPostsRoute } from '../utils/userRoutes'
import cookie from "js-cookie";
import { parseCookies } from "nookies";
import CreatePost from '../components/Posts/CreatePost'
import CardPost from '../components/Posts/CardPost'

export default function Home({user,userFollowStats,postsData}) {
  // console.log(user,'is the user from the index page and its working now ')
  // console.log(postsData)
  const [theuser,setUser] = useState('')
  const [theuserFollowStats,setUserFollowStats] = useState('')
  const [posts,setPosts] = useState(postsData)
  const [change,setChange] = useState(1)


  // useEffect(()=> {
  //   setPosts()
  // },[change])


  const getUserData = async() => { // this useEffect is used just in case if the user data is not loaded by the app.js it will collect the user data _Note** this will only work when the _app.js fails to pass user data
    const {data} = await axios.post(`${baseUrl}/api/getUserDetails`)
    if(data.status) {
      user = data.user
      userFollowStats = data.userFollowStats
      setUser(user)
      setUserFollowStats(userFollowStats)
      document.title = `Welcome ${user.name}`
    }
  }

  useEffect(() => {
    if(!user) getUserData()
    else {
      setUser(user)
      setUserFollowStats(userFollowStats)
      document.title = `Welcome ${user.name}`
    }
  },[])
  // console.log(user,'is the user and userFollowStats are' , userFollowStats)


  return (
    <div className={css.container}>
     <HeadTags />
     <Sidemenu user={theuser} />
     <HomeScrollArea>
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      <br />
      {
        posts && posts.map((post,index) => {
          return <CardPost key={index} post={post} user={user} setPosts={setPosts} />
        })
      }
     </HomeScrollArea>
     <Search />
    </div>
  )
}

Home.getInitialProps = async (ctx) => { 
  try{
    const { FreeBirdUserToken } = parseCookies(ctx);
    // console.log(FreeBirdUserToken,'is the token')
    const {data} = await axios.get(getAllPostsRoute, {
      headers: { FreeBirdUserToken: FreeBirdUserToken }
    });
   
    return { postsData: data.posts}
  }catch(e){
    console.log(e,'is the error in home getinitial props')
    return {error: true}
  }
}
