import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Transaction from './components/pages/Transaction'
import NotFoundPage from './components/pages/NotFoundPage'
import Header from './components/pages/Header'
import Layout from './Layout'

const App = () => {
  return (
    <>  
     <Routes >
        <Route path='/' element={<Layout/>}>
      
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Transaction/:id" element={<Transaction/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
       
      </Routes>
    </>
      
    
  )
}

export default App
