import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Pages/Home'
import Comment from './Components/Comment'
import New from './Pages/New'
import Show from './Pages/Show'
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
            <img src="https://i.imgur.com/pLt38gU.png" alt="Logo"/>
          </Link>
          <h1 className="title">Welcome to a more beautiful you!</h1>
          <Link to='/products/new' className="add">
            <button>Add to Inventory</button>
          </Link>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path="/product/new" component={New}/>
            <Route path='/product/:id' render={(props) => <Show {...props}/>} />
            <Route exact path='/not-found' component={Error} />
          </Switch>
        </div>

      </div>
    )
  }
}






/*

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
*/