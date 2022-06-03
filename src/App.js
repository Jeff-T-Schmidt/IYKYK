import { Routes, Route } from 'react-router-dom'
// import Home from './components/pages/Home.js'
import Login from './components/pages/Login.js'
import Nav from './components/navbar.js'
import StickyFooter from './components/footer.js'
import Header from './components/header.js'
import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import SignUp from './components/pages/Signup.js'

function App() {
  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <StickyFooter />
    </>
  );
}



export default App;
