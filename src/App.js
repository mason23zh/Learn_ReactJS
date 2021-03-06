import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExersisesList from "./components/exercises-list.component";
import EditExercise from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbar>
        <br/>
        <Route path="/" exact component={ExersisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Navbar>
    </Router>
  );
}

export default App;
