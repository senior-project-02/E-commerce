
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider, useCookies } from "react-cookie";
import Login from './Ahmed/Login';
import SignUp from './Ahmed/SignUp'
import Home from './Aymen/Home';


function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }
  return (
    <div>
        <CookiesProvider>
      <div>
        {cookies.user ? (
          <Home user={cookies.user} />
        ) : (
          <login onLogin={handleLogin} />
        )}
      </div>
    </CookiesProvider>

<Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>

      </Routes>
      </Router>
      
    </div>

  );
}

export default App
