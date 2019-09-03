import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/about';
import Notfound from './components/notfound';

const routing = (
    <Router>
      <div>
        <ul className="ui three item menu">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route component={Notfound} />
      </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.querySelector('#root'));