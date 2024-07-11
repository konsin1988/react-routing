import { Routes, Route, Link } from 'react-router-dom'

import classes from './App.module.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Layout } from './components/Layout'


function App() {
  return (
    <>
      <Header/>
      <main className={classes.App}>
        <Routes>
          <Route path='/' element={<Layout/>}>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/posts' element={<BlogPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
