import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import classes from './style.module.css'


export const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)


    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

  return (
    <div className={classes.container} >
      <h1>SinglePage - {id}</h1>
      <p>
          {post && post.body }
      </p>
      <Link className={classes.editButton} to={`edit`}>Edit this post</Link>
    </div>
  )
}
