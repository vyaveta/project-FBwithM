import React, { useEffect, useState } from 'react'
import css from '../../styles/components/PostComments.module.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import {IoIosFlag} from 'react-icons/io'
import { calculateTime } from '../../utils/calculateTime'

const PostComments = ({post,comments,user}) => {

  useEffect(() => {
    console.log(comments,'ist e comment')
  },[])

  const [showCommentActionBox,setShowCommentActionBox] = useState(false)

  return (
    <div className={css.container}>
     {
       comments && comments.map((comment,index) => {
       return (
        <div className={css.commentBox} key={index}>
        <div className={css.metaData}>
        {/* <div> */}
        <img src={comment.user.profilePicUrl} className={css.commentProfileImage} />
        {/* </div> */}
        {/* <div> */}
        <p className='margin-0 fontweight-600'>{comment?.user?.username}</p>
        {/* </div> */}
        </div>
        <div className={`width-100 ${css.metaData}`}>
        <p className={`${css.commentText} margin-0`} >{comment.text}</p>
        </div>
        <div className={`${css.metaDataWithAction} ${css.noWrap}`}>
         <p className = {`margin-0 ${css.w}`}> {calculateTime(comment.date)} </p>
         <div className={css.threeDotAction}>
          <BsThreeDotsVertical onClick={() => setShowCommentActionBox(!showCommentActionBox)} />
          {
           showCommentActionBox && <div className={css.threeDotActionBox}>
             <ul>
               <li>Edit <MdEdit /></li>
               <li>Delete <MdDelete /></li>
               <li>Report  <IoIosFlag /></li>
             </ul>
           </div>
          }
         </div>
        </div>
       </div>
       )
       })
     }
      <div className={css.buttonDiv}>
         <button className={css.viewMoreButton}>View More</button>
      </div>
    </div>
  )
}

export default PostComments