import { Routes, Route, Navigate } from 'react-router-dom'

import classes from './App.module.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Layout } from './components/Layout'
import { SinglePage } from './pages/SinglePage'
import { CreatePage } from './pages/CreatePage'
import { EditPage } from './pages/EditPage'
import { LoginPage } from './pages/LoginPage'
import { AuthProvider } from './hoc/AuthProvider'

import { RequireAuth } from './hoc/RequireAuth'


function App() {
  return (
    <>
      <AuthProvider>
      <Header/>
      <main className={classes.App}>

        <Routes>
          <Route path='/' element={<Layout/>}>

            <Route index element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='about-us' element={<Navigate to='/about' replace/>}/>
            <Route path='posts' element={<BlogPage/>}/>
            <Route path='posts/:id' element={<SinglePage/>}/>
            <Route path='posts/:id/edit' element={
              <RequireAuth>
                <EditPage/>
              </RequireAuth>
              }/>
            <Route path='posts/new' element={
              <RequireAuth>
                <CreatePage/>
              </RequireAuth>
              }/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </main>
      </AuthProvider>
    </>
  );
}

export default App;
