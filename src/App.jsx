import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/user/HomePage'
import Error404 from './pages/user/Error404'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App