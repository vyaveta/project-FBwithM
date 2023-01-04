import React, { useState } from 'react'
import css from '../../styles/components/CommentInputField.module.css'
import {GrSend} from 'react-icons/gr'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const CommentInputField = ({postId,user,setComments}) => {

    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)

  return (
    <div className={css.container}>
        <img src={user.profilePicUrl} />
        <input type='text' placeholder='Comment this post' name='text' autoComplete='off' 
        // value={text} 
        />
        <FontAwesomeIcon className={css.icon} icon={faPaperPlane} />
    </div>
  )
}

export default CommentInputField