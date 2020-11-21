import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/pages/Navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
