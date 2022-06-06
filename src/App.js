import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/index.js'
import Footer from './components/Footer/index.js'
import Header from './components/Header/index.js'
import NewEvent from './pages/Events/index.js'
import Profile from './pages/Profile/index.js'
import Chat from './components/Chat/index.js'
import MyInvites from './pages/Invites/index.js'
import CreateEvent from './pages/Events/index.js'
import Home from './pages/Home/index.js'
import Landing from './pages/Landing/index.js'
import * as React from 'react';
import API from "./utils/API"
import { useEffect,useState } from "react";
import SignUp from './pages/Signup/index.js'

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
      if(data){
        setToken(data)
        localStorage.setItem("token",data)
      }
    })
  }
  const handleSignupSubmit=signupData =>{
    console.log(signupData)
    API.signup(signupData).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data){
        setToken(data)
        localStorage.setItem("token",data)
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
