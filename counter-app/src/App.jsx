
import './App.css'
import React from 'react'
// import Calc from './assets/components/Calc'
import Login from './assets/components/login'
import Register from './assets/components/register'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const  App = () =>{


  return (
    <>
    <Router>

      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>

    </Router>

    </>
  )
}

export default App



