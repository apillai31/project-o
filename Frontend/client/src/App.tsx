import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import {Login} from "./Pages/Login"

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path = "/" element={<Login />}/>
      <Route path = "/Home" element={<h1>Home page!!!!</h1>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
