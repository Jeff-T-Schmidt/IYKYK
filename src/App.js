import { Routes, Route } from 'react-router-dom'
// import Home from './components/pages/Home.js'
import Login from './components/pages/Login.js'
import Nav from './components/navbar.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import * as React from 'react';
// import ReactDOM from 'react-dom';
import SignUp from './components/pages/Signup.js'

function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </>
  );
}



export default App;
