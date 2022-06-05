import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home.js'
import Login from './components/pages/Login.js'
import Nav from './components/navbar.js'
import Footer from './components/footer.js'
import Header from './components/header.js'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
