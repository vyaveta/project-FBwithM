import React, { useEffect, useState } from "react";
import css from "../../styles/components/CreatePost.module.css";
import { useSelector } from "react-redux";
import {TiImage} from 'react-icons/ti'

const CreatePost = () => {
  const darkmode = useSelector((state) => state.darkmode.value);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(darkmode);
  }, [darkmode]);

  useEffect(() => {
    setIsDarkMode(darkmode);
  }, []);

  return (
    <div
      className={isDarkMode ? `${css.container} ${css.dark}` : css.container}
    >
      <div className={css.box}>
        <h3>Share your thoughts</h3>
      </div>
      <div className = {css.box} >
        <input type="text" placeholder="Write your thoughts here"/>
      </div>
      <div className={css.box2}>
        
        <div className={css.locationBox}>
          <input type="text" placeholder="Location" />
        </div>
        <div className={css.box3}>
        <button className="dark__button" >Publish</button>
      </div>
      </div>
    </div>
  );
};

export default CreatePost;
