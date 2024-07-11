import React from 'react'
import classes from './style.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link to='/'>Logo</Link>
            </div>
            <nav className={classes.nav}>
                <Link to="/" className={classes.a}>Home</Link>
                <Link to="/posts" className={classes.a}>Posts</Link>
                <Link to="/about" className={classes.a}>About</Link>
            </nav>
        </div>
    </header>
  )
}
