import React, { useEffect, useState } from "react";
import css from "../../styles/components/CreatePost.module.css";
import { useSelector } from "react-redux";
import {TiImage} from 'react-icons/ti'

const CreatePost = ({user,posts,setPosts}) => {
  const darkmode = useSelector((state) => state.darkmode.value);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [newPost,setNewPost] = useState({
    text:'',
    location:'',
    user:'',
    likes:[],
    comments: [],
    
  })

  const handleCreateNewPost = (e) => {
    console.log('function called')
    const {name,value} = e.target
    const obj = newPost
    obj[name] = value
    setNewPost(obj)
  }

  const handleUploadNewPost = async () => {
    try{
      posts.unshift(newPost)
      setPosts(posts)
      console.log(posts,'is the posts')
    }catch(e){
      console.log(e,'is the error that occured in the handleUploadNewPost function in the CreatePost.js')
    }
  }

  useEffect(() => {
    setIsDarkMode(darkmode);
  }, [darkmode]);

  useEffect(() => {
    setIsDarkMode(darkmode);
  }, []);

  useEffect(() => {
    
  },[newPost])


  return (
    <div
      className={isDarkMode ? `${css.container} ${css.dark}` : css.container}
    >
      <div className={css.box}>
        <h3>Share your thoughts</h3>
      </div>
      <div className={css.createDiv}>
        <div className={css.ProfilePicDiv}>
          <img src={user.profilePicUrl} className={css.profilePic} />
        </div>
      <div className = {css.box} >
        <input className={css.input} onChange={handleCreateNewPost}
         value={newPost.text} 
         name='text' 
         type="text" 
         placeholder="Write your thoughts here"
         autoComplete="off"
         />
      </div>
      </div>
      <div className={css.box2} >
        <TiImage className={css.icon} />
        <div className={css.inputCover}>
          <input className={css.input}
           type='text' 
           placeholder='Location'
           autoComplete="off"
           value={newPost.location}
           onChange={handleCreateNewPost}
           name='location'
           />
        </div>
        <div>
          <button className="dark__button"
          onClick={handleUploadNewPost}
          >Upload</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
