import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/index.js'
import Footer from './components/Footer/index.js'
import Header from './components/Header/header.js'
import NewEvent from './pages/Events/NewEvent/index.js'
import Profile from './pages/Profile.js'
import Home from './pages/Home.js'
import Landing from './pages/Landing.js'
import * as React from 'react';
import SignUp from './pages/Signup.js'

function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/newEvent' element={<NewEvent/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </>
  );
}



export default App;
