import React, { useState } from 'react'
import css from '../../styles/components/CommentInputField.module.css'
import { toast } from 'react-toastify'
import axios from 'axios'

// Icons
import {GrSend} from 'react-icons/gr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { routeForPostComment } from '../../utils/userRoutes'
import { getUserAuthHeader } from '../../utils/authUser'

const CommentInputField = ({postId,user,setAllPosts}) => {

    const headers = getUserAuthHeader()

    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)

    const handleError = msg => {
      toast.error(msg)
    }

    const handlePostComment = async e => {
      try{
        if(text.trim()==='') return handleError("Enter a valid comment")
        const {data} = await axios.post(`${routeForPostComment}/${postId}`,{text},{headers})
        console.log(data,'from axios')
        if(!data.status) return handleError(data.msg)
        setAllPosts()
        setText('')
      }catch(e){
        console.log(e,'isth error in comment')
        handleError('Oops something went wrong')
      }
    }

  return (
    <div className={css.container}>
        <img src={user.profilePicUrl} />
        <input type='text' placeholder='Comment this post' name='text' autoComplete='off' 
         value={text} 
         onChange={ e => setText(e.target.value)}
        />
        <FontAwesomeIcon className={css.icon} icon={faPaperPlane} 
        onClick={handlePostComment}
        />
    </div>
  )
}

export default CommentInputField