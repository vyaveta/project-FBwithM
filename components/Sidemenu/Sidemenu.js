import React from 'react'
import css from './Sidemenu.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GiHummingbird} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import {FiMessageCircle} from 'react-icons/fi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {VscAccount} from 'react-icons/vsc'
import {HiLogout} from 'react-icons/hi'
import { userLogout } from '../../utils/authUser'

const Sidemenu = ({user:{unreadMessage,unreadNotification,username,email}}) => {
  console.log(unreadMessage,'is the msg')
  const router = useRouter()

  const logout = () => {
    
  }

  const isActive = route => router.pathname === route // This is a function that check if the router 
  return (
    <div className={`${css.container} ${css.light}`}>
      <div className={`${css.title}`}>
        <GiHummingbird className={`${css.logo}`} />
      <h1>Freebird</h1>
      </div>
        <div className={isActive('/') ? `${css.active} ${css.box}` :`${css.box}`}>
      <Link href='/'>
          <h3>Home</h3>
      </Link><AiOutlineHome className={`${css.subLogo} `} />
        </div>
      <div className={isActive('/messages') && unreadMessage ? `${css.dot} ${css.active}` : unreadMessage ? css.dot : isActive('/message') ? `${css.active} ${css.box}` : css.box}>
        <h3>Messages</h3><FiMessageCircle className={`${css.subLogo}`} />
      </div>
      <div className={ unreadNotification && isActive('/notifications') ? `${css.active} ${css.dot}` : isActive('/notifications') ? `${css.active} ${css.box}` : unreadNotification ? css.dot : css.box}>
        <h3>Notifications</h3><IoMdNotificationsOutline className={`${css.subLogo}`} />
      </div>
      <div className={isActive('/account') ? `${css.active} ${css.box}` : css.box}>
        <h3>Account</h3><VscAccount className={`${css.subLogo}`} />
      </div>
      <div className={`${css.box}`}
      onClick={() => userLogout(email)}
      >
        <h3>Logout</h3><HiLogout className={`${css.subLogo}`} />
      </div>
    </div>
  )
}

export default Sidemenu