import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Button from './Button';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/button" component={Button} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;