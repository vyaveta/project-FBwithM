import axios from "axios";
import baseUrl from '../utils/baseUrl'
import catchErrors from './catchErrors'
import Router from "next/router";
import Cookies from "js-cookie";
import { userLoginRoute, userSignupRoute } from "./userRoutes";

// Some functions

const setToken = token => {
    try{
        Cookies.set('FreeBirdUserToken',token)
        Router.push('/')
    }catch(err){
        console.log(`${err} is the error that occured in the setToken function in the authUser file which is in the utils folder`)
    }
}

export const registerUser = async (name , username, email, password, profilePicUrl, setError , setLoading) => {
    try{
        console.log(profilePicUrl,'is the profile pic url')
        setLoading(true)
        const {data} = await axios.post(userSignupRoute,{username , name, email , password, profilePicUrl})
        if(!data.status) return setError(data.msg)
        console.log('no error till now and the token data is' , data)
        setToken(data.token)
    }catch(err){
        console.log(`${err} is the error that occured in the registerUser function in the auth.js file in the utils folder`)
    }
}

export const userLogin = async (email,password,setError,handleError) => {
    try{
        console.log(email,' is the email')
        const {data} = await axios.post(userLoginRoute,{email , password})
        console.log(data,'is the data')
        if(!data.status) return handleError(data.msg)
        console.log('Login success')
        return setToken(data.token)
    }catch(err){
        console.log(`${err} is the error occured in the loginUser function in the authUser file in the utils folder`)
        return setError('Oops Something went wrong!')
    }
}