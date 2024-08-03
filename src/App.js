import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './root-components/ErrorBoundary';
import Header from './root-components/Header';
import Home from './root-components/Home';
import Settings from './root-components/Settings';
import Dashboard from './root-components/Dashboard';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <section className="header">
          <Header />
        </section>
        <Container className="root-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
      </ErrorBoundary>
    </Router>
  );
}

export default App;