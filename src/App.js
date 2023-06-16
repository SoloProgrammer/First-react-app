import React, { useEffect, useState } from 'react'
import Header from './components/Header' // this im
// import Footer from './components/Footer'
import Hero from './components/Hero'
import './components/combine.css'
import TextUtilsForm from './components/TextUtilsForm'
import StopWatch from './components/StopWatch/StopWatch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/User'
import Products from './components/Products/Products'
// import BootstrapHeader from './components/BootstrapHeader'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log("App.js wala useEffect runs")
    if (darkMode) {
      document.body.style.background = '#1d1d1d'
      document.body.style.color = 'white' 
    }
    else{
      document.body.style.background = 'white'
      document.body.style.color = 'black' 
    }
  }, [darkMode])

  return (
    <>
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route exact path="/" element={<Hero darkMode={darkMode} />} />
          <Route exact path="/texteditor" element={<TextUtilsForm />} />
          <Route exact path="/timer" element={<StopWatch />} />
          <Route exact path="/user/:id" element={<User />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App