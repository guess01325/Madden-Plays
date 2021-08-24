import './App.css';
import axios from "axios"
import {useState, useEffect } from "react"
import { Link, Route } from "react-router-dom"
import { baseURL, config } from './services/index.js';
import Plays from "./components/Plays"



function App() {


  return (
  <div className="header">
     <header>
       
       <Link to="/">Home</Link>
       <Link to="/plays">Plays</Link>
       <Link to="/form">Suggest Plays</Link>
     </header>
     <div>
       
     </div>
       <div>
     
       <h2>Own the Gridiron!</h2>
       <p>Popular Madden plays liver here! Add your play to the list</p>
       
       <Plays />
       </div>
       
     </div>
  
  )
}

export default App;
