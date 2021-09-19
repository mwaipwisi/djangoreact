import logo from './logo.svg';
import './App.css';
import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route,Link} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
  <Fragment>
    <div>
          <nav className="navbar navbar-expand navbar-dark bg-info">
            <a href="/" className="navbar-brand">
              Ugalisoft Menu
            </a>
          </nav>
    </div>
      <div>
          <Home/>
      </div>
      </Fragment>
  );
}

export default App;
