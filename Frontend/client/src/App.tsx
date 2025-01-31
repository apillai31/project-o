import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Login} from "./Pages/Login"
import {Home} from "./Pages/Home"



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element={<Login />}/>
          <Route path = "/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
