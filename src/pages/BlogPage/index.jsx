import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './style.module.css'

export const BlogPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Our news</h1>
      <ul className={classes.ul}>
      {
        posts.map(post => (
          <Link className={classes.li} key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
      <Link 
        to='new'
        className={classes.newPost}
      >Create Post</Link>
      </ul>
    </div>
  )
}

