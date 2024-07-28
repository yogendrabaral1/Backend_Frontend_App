import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SundarsathList from './components/SundarsathListComponent';
import Sundarsath from './components/SundarsathComponent';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={SundarsathList} />
      <Route path="/:id" exact component={Sundarsath} />
    </Router>
  );
}

export default App;
