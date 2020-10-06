import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Trending from './components/Trending';
import Upload from './components/Upload';
import Search from './components/Search';
import Preview from './components/Preview';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path = "/" exact component = {Trending} />
          <Route path = "/search" component = {Search} />
          <Route path = "/upload" component = {Upload} />
          <Route path = "/preview" component = {Preview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
