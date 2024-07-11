import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import classes from './style.module.css'

export const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    
    const linkClasses = `${classes.a} ${match ? classes.active : ''}`;
    

  return (
    <Link
        to={to}
        {...props}
        className={ linkClasses }
    >
        {children}
    </Link>
  )
}
