import React, { useEffect, useState } from 'react'
import css from '../../styles/components/PostComments.module.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import {IoIosFlag} from 'react-icons/io'
import { calculateTime } from '../../utils/calculateTime'

const PostComments = ({post,comment,user}) => {

  useEffect(() => {
    console.log(comment,'ist e comment')
  },[])

  const [showCommentActionBox,setShowCommentActionBox] = useState(false)

  return (
    <div className={css.container}>
     
        <div className={css.commentBox}>
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
               {/* <li>Report  <IoIosFlag /></li> */}
             </ul>
           </div>
          }
         </div>
        </div>
       </div>
      
    </div>
  )
}

export default PostComments