import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import NewEvent from './components/pages/newEvent.js'
import Profile from './components/pages/Profile.js'
import Chat from './components/pages/Chat.js'
import MyInvites from './components/pages/myInvites.js'
import CreateEvent from './components/pages/createEvent.js'
import Home from './components/pages/Home.js'
import Landing from './components/pages/Landing.js'
import * as React from 'react';
import SignUp from './components/pages/Signup.js'

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
        <Route path='/chat' element={<Chat/>} />
        <Route path='/myinvites' element={<MyInvites/>} />
        <Route path='/createevent' element={<CreateEvent/>} />
      </Routes>
      <Footer/>
    </>
  );
}



export default App;
