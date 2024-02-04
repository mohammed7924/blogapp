import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Header from './components/Header'
import Footer from './components/Footwer'
import Search from './Pages/Search'
import Post from './Pages/Post'
import CreatePost from './Pages/CreatePost'

function App() {
  return (
<BrowserRouter>
<Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/search' element={<Search />} />
      <Route path='/post' element={<Post />} />
      <Route path='/create-post' element={<CreatePost />} />

    
    </Routes>
    <Footer></Footer>
   
</BrowserRouter>  )
}

export default App