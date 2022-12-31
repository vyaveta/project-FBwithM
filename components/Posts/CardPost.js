import React, { useEffect, useState } from 'react'
import css from '../../styles/components/CardPost.module.css'
import {FcLikePlaceholder} from 'react-icons/fc'
import {FcLike} from 'react-icons/fc'
import {AiOutlineComment} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { RouteForLikingAPost, RouteForUnLikingAPost } from '../../utils/userRoutes'
import Cookies from 'js-cookie'
import { calculateTime } from '../../utils/calculateTime'
import PostComments from './PostComments'

const CardPost = ({post,user}) => {
  const [postLiked,setPostLiked] = useState(false)
  const [postLikesCount,setPostLikesCount] = useState(0)
  const [postCommentsCount,setPostCommentsCount] = useState(0)
  const [showComments,setShowComments] = useState(true)

  const isDarkMode = useSelector(state=>state.darkmode.value)
  const [darkmode,setDarkmode] = useState(false)
  const [userCookie,setUserCookie] = useState('')

  const handleLikePost = async(postId) => {
    console.log(userCookie,'is the user cookie')
    const {data} = await axios.post(`${RouteForLikingAPost}/${postId}`,{
      headers: { freebirdusertoken: userCookie }
    })
    if(data.status) {
      setPostLiked(true)
      setPostLikesCount(postLikesCount+1)
    }
  }

  const handleUnlikePost = async(postId = post._id.toString())  => {
    const {data} = await axios.post(`${RouteForUnLikingAPost}/${postId}`,{
      Headers: {freebirdusertoken: userCookie}
    })
    console.log(data,'is the unlike post data from axios')
    if(data.status){
      setPostLikesCount(postLikesCount-1)
      setPostLiked(false)
    } 
  }

  useEffect(() => {
    setDarkmode(isDarkMode)
  },[isDarkMode])

  useEffect(()=> {
    if(post.likes.filter(like => like.user.toString()===user._id).length > 0) setPostLiked(true)
    setDarkmode(isDarkMode)
    const cookie = Cookies.get('FreeBirdUserToken')
    setUserCookie(cookie)
    setPostLikesCount(post.likes.length)
    setPostCommentsCount(post.comments.length)
  },[])

  return (
    <div className={darkmode ? `${css.container} ${css.dark}`: css.container}>
      <div className={css.box} >
        <div className={css.postMetaLeft}>
          <div className={css.userDetails}>
            <img className={css.userProfileImg} src={post.user.profilePicUrl} />
          </div>
          <div className = {css.userDetails}>
            <h4>{post.user.username}</h4>
            <h5>{post.location && post.location}</h5>
          </div>
        </div>
        <div className={css.postMetaRight}>
          <div className={css.timediv}> {calculateTime(post.createdAt)} </div>
        </div>
      </div>
      <div className={css.box}>
        <h4>{post.text}
        </h4>
      </div>
          <div className={css.line} />
      <div className={css.box}>
        <div className={css.actions}>
         <div className={css.actionBox}>
         {
            postLiked ? <FcLike className={css.icon} onClick={() => handleUnlikePost(post._id)} /> : <FcLikePlaceholder onClick={() => handleLikePost(post._id)} className={css.icon} />
          }
          &nbsp;
          {
             `   ${postLikesCount} likes` 
          }
         </div>
         <div className={css.actionBox} style={{cursor:'pointer'}}>
          {
            <AiOutlineComment className={css.icon} />
          }
          &nbsp;
          {
            `${postCommentsCount} Comments`
          }
         </div>
        </div>
      </div>
      {
        showComments && <PostComments />
      }
    </div>
  )
}

export default CardPost