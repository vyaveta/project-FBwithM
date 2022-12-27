import React from 'react'
import css from './Search.module.css'

const Search = () => {
  return (
    <div className={`${css.container} ${css.dark} `} >
      <div className={css.box}>
        <input placeholder='Search for Users' />
      </div>
    </div>
  )
}

export default Search