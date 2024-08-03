import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;