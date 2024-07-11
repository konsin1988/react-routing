import React from 'react'
import { useParams } from 'react-router-dom'

export const EditPage = () => {
  const {id} = useParams()
  return (
    <div>EditPage {id}</div>
  )
}
