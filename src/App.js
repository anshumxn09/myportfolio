import React from 'react'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Interest from './components/Interest'
import Languages from './components/Languages'
import MoveToTop from './components/MoveToTop'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Languages/>
      <Interest/>
      <Projects/>
      <Footer/>
      <MoveToTop/>
    </>
  )
}

export default App