import { Link, Outlet } from 'react-router-dom'

import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
