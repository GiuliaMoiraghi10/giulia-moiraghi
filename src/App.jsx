import React from 'react'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ProjectDetails from './pages/ProjectDetails'
import ContactPage from './pages/ContactPage'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/portfolio' element={<ProjectPage />} />
          <Route path='/portfolio/:id' element={<ProjectDetails />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
