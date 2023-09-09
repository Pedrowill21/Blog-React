import { useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import './App.css'
import Home from './pages/Home/Home'
import About from './pages/Aboute/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from "./context/AuthContext";
import { useAuthentication } from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
import CreatePost from './pages/CreatePost/CreatePost'
import DashBoard from './pages/DashBoard/DashBoard'

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
     <AuthProvider value={{user}}>
     <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route path='/register' element={ !user ? <Register/> : <Navigate to="/"/>}/>
            <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to="/login" />}/>
            <Route path='/dashBoard' element={user ? <DashBoard/> : <Navigate to="/login"/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
     </AuthProvider>
    </div>
       
  )
}

export default App
