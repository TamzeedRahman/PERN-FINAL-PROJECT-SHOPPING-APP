import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Comment from './Components/Comment'
export default class App extends Component {
  constructor(){
    super()
    //needs state object linking from Home 
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <nav className="Navbar">

          <Link to='/' className="Navbar-Items">
            <img src="https://imgur.com/pLt38gU" alt="Logo"/>
          </Link>
          
          <Link to='/about' className="Navbar-Items">
            About
          </Link>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/about' component={About} />
            <Route path='/video/:id' render={(props) => <Comment {...props}/>} />
          </Switch>
        </div>

      </div>
    )
  }
}








import axios from "axios";









import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => setDays(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
