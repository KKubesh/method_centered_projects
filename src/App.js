import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import UserPage from './components/UserPage/UserPage';
import Main from './components/Main/Main';
import AdminPage from './components/AdminPage/AdminPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

import './styles/main.css';

const styles = {
  root: {       
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      justify: 'center',
      alignItems: 'center',
  }
}

const App = () => (
  <div style={styles.root}>
    <Header title="Method Centered App" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={Main}
        />
        <Route
          path="/admin"
          component={AdminPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/project/:id"
          component={ProjectPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
