import React, { Children, useEffect, useState } from 'react'
import css from './HomeScrollArea.module.css'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'

const HomeScrollArea = () => {
  const darkmode = useSelector((state) => state.darkmode.value)
  const [isDarkMode,setIsDarkMode] = useState(true)

  useEffect(() => {
    setIsDarkMode(darkmode)
  },[])
  useEffect(() => {
    setIsDarkMode(darkmode)
  },[darkmode])
  return (
    <div className={isDarkMode ? `${css.dark}` : `${css.container}`} >
      
    </div>
  )
}

export default HomeScrollArea