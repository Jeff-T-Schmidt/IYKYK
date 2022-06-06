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
import API from "./utils/API"
import { useEffect,useState } from "react";
import SignUp from './components/pages/Signup.js'
import { useEffect,useState } from "react";
import API from "./utils/API"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token,setToken] = useState(null)
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    if(savedToken){
      setToken(savedToken)
    }
  },[])
  useEffect(()=>{
   if(token){
      API.verify(token).then(userData=>{
        if(userData.userId){
          setIsLoggedIn(true);
          setUserId(userData.userId)
        } else {
          setIsLoggedIn(false);
          setUserId(null)
        }
      }) 
    }else {
      setIsLoggedIn(false);
      setUserId(null)
    }
  },[token])
  const handleLoginSubmit=loginData =>{
    console.log("handle login",loginData)
    API.login(loginData).then(data=>{
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const handleSignupSubmit=signupData =>{
    API.signup(signupData).then(data=>{
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const logout = ()=>{
    setToken(null);
    localStorage.removeItem("token")
  }
  return (
    <>
     <Header isLoggedIn={isLoggedIn} userId={userId} logout={logout}/>
      <Routes>
        <Route path='/login' element={<Login login={handleLoginSubmit}/>} />
        <Route path='/signup' element={<SignUp signup={handleSignupSubmit}/>} />
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
