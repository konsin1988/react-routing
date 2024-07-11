import React from 'react'
import classes from './style.module.css'
import { useNavigate } from 'react-router-dom'




export const GoBackButton = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const goForward = () => navigate(1)
  
    return (
    <>
        <button 
            className={classes.button + ' ' + classes.back}
            onClick={goBack}
            >
            Go Back
        </button>
        
        <button 
            className={classes.button + ' ' + classes.forward}
            onClick={goForward}
        >
            Go Forward
        </button>
    </>
  )
}
