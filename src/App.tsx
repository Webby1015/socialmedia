import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
// import './App.css';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Error } from './pages/error';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/createpost/createpost';

function App() {
  return (
    <div className=" App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
