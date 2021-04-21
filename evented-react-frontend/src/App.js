import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import GroupsIndexContainer from './containers/GroupsIndexContainer';
import GroupFormContainer from './containers/GroupFormContainer';

function App() {
  return (
    <div className="App">
        <Router>
            <nav>
              <NavLink to="/">Groups</NavLink>
              <NavLink to="/groups/new">New Groups</NavLink>
            </nav>
          <Switch>
            <Route exact path="/">
              <GroupsIndexContainer />
            </Route>
            <Route path="/groups/new">New Group</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
