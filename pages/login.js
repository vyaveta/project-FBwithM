import React, { useState , useEffect} from 'react'
import { useRef } from 'react';
import {toast } from 'react-toastify'
import css from '../styles/login.module.css'
import axios from 'axios';
import Link from 'next/link';
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'


function Login() {

    const emailRef = useRef()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const[showPassword,setShowPassword] = useState(false)
    const [googleAccount,setGoogleAccount] = useState(false)

    const toastOptions =  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    }

    const handleSubmit = async () => {
    }
    const handleError = (msg) => {
        toast.error(msg,toastOptions)
    }

  return (
    
    <div className={css.login__wrapper}>
        <div className={css.clouds}>
            <img src='/cloud.png' alt="" />
            <img src='/cloud.png' alt="" />
        </div> 
    <div className={css.login__container}>
        <div className={css.login__title}>
            <h2>Login</h2>
        </div>
        <div className={css.login__box}>
            
            <input type="email" placeholder='Email' name="" id="" autoComplete='off' value={email} ref={emailRef} onChange = {(e) => setEmail(e.target.value)} />
        </div>
        <div className={css.login__box}>
            <input type= {showPassword ? 'text' : 'password'} 
            placeholder='password' name="" id="" value={password} onChange = {(e) => setPassword(e.target.value)} />
            {
                        showPassword ? ( <AiFillEyeInvisible
                            onClick={() => setShowPassword(false)}
                            className={css.loginShowPasswordIcon} 
                            /> ) : ( <AiFillEye
                                onClick={() => setShowPassword(true)}
                                className={css.loginShowPasswordIcon} 
                                /> )
            }
        </div>
        <div className={css.login__box}>
            <button className="login__button" onClick={handleSubmit} >Login</button>
        </div>
        <div className={css.login__box} id='googleSignIn'></div>
        <div className={css.login__box}>
            <p className={css.bottom__text} >Dont have an Account? <span 
            style={{textDecoration:'underline',cursor:'pointer'}} 
            > <Link href='/signup'>Signup</Link> </span> </p>
        </div>
    </div>
    </div>
  )
}

export default Login