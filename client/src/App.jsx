
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Ahmed/Login';
import SignUp from './Ahmed/SignUp'




function App() {
  return (
    <div>

<Router>
      <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>

      </Routes>
      </Router>
      
    </div>
  );
}

export default App
