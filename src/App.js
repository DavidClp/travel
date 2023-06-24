import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home'
;
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App