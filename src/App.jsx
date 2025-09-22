import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} ></Route>
            <Route path='/about' element={<AboutPage />} ></Route>
            <Route path='/portfolio' element={<ProjectPage />} ></Route>
            <Route path='/contact' element={<ContactPage />} ></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
