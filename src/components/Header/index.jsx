import React from 'react'
import classes from './style.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './style.module.css'
import { CustomLink } from '../CustomLink';
import { useAuth } from '../../hook/useAuth';

export const Header = () => {

  const { user, signout } = useAuth()
  const navigate = useNavigate()
  const logoutHandler = () => {
    signout(() => {
      navigate('/', {replace: true })
    })
  }

  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link to='/'>Logo</Link>
            </div>
            <nav className={classes.nav}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
        {user && <button 
          className={classes.logoutButton} 
          onClick={logoutHandler}
        >
          Log out
        </button>}
    </header>
  )
}
