import React, { useState } from 'react'
import css from '../../styles/components/PostComments.module.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import {IoIosFlag} from 'react-icons/io'

const PostComments = () => {

  const [showCommentActionBox,setShowCommentActionBox] = useState(false)

  return (
    <div className={css.container}>
      <div className={css.commentBox}>
       <div className={css.metaData}>
       {/* <div> */}
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAh0vbMcW8-iQddNLMiL_stLwZRMge_jg6g&usqp=CAU' className={css.commentProfileImage} />
       {/* </div> */}
       {/* <div> */}
       <p className='margin-0 fontweight-600'>Adwaith</p>
       {/* </div> */}
       </div>
       <div className={`width-100 ${css.metaData}`}>
       <p className={`${css.commentText} margin-0`} >Wow thatsaninspiring one ljsfjklsjfoskksfssnvksnfslfnnf </p>
       </div>
       <div className={`${css.metaDataWithAction} ${css.noWrap}`}>
        <p className = {`margin-0 ${css.w}`}>Today 12:01 am</p>
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

      <div className={css.buttonDiv}>
         <button className={css.viewMoreButton}>View More</button>
      </div>
    </div>
  )
}

export default PostComments