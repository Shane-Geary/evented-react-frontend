import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GroupsIndexContainer from './containers/GroupsIndexContainer';
import GroupFormContainer from './containers/GroupFormContainer';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">Groups</Route>
            <Route path="/groups/new">New Group</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
