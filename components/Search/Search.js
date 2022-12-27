import React, { useState } from 'react'
import css from './Search.module.css'
import Image from 'next/image'
import axios from 'axios'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { searchUsersRoute } from '../../utils/userRoutes'

let cancelUserSearch; // This variable is used to cancel the axios search user request if the request is pending


const Search = () => {

  const [text,setText] = useState('')
  const [loading,setLoading] = useState(false)
  const [results,setResults] = useState([])

  //functions
  const handleChange = async text => {
    try{
      cancelUserSearch && cancelUserSearch()
      const CancelToken = axios.CancelToken
      setText(text)
      const {data} = await axios.get(`${searchUsersRoute}/${text}`,{cancelToken: new CancelToken(canceler => {
        cancelUserSearch = canceler
      } )})
      if(data.status) setResults(data.results)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className={`${css.container} ${css.light} `} >
      <div className={css.box}>
        <input placeholder='Search for Users' 
        onBlur={() => {
          setResults([])
          setText('')
        }}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className={css.searchResults}>
      {
        results && results.map((user,index) => {
          return <>
             <div className={css.searchResultBox} key={index}>
               <div className={css.searchResultImageBox}>
                <img src={user.profilePicUrl} height='50px' width='50px' className='borderRadius50' style={{cursor:'pointer', objectFit:'cover'}}  />
               </div>
               <div className={css.searchResultsNameBox}>{user.username}</div>
             </div>
          </>
        })
      }
      </div>
    </div>
  )
}

export default Search