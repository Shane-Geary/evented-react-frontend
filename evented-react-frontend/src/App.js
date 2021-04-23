import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import GroupsIndexContainer from './containers/GroupsIndexContainer';
import GroupFormContainer from './containers/GroupFormContainer';
import EventContainer from './containers/EventContainer';

function App() {
  return (
    <div className="App">
        <Router>
            <nav className="text-center p-4">
              <NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/">Groups</NavLink>
              <NavLink exact activeClassName="active" to="/groups/new">New Groups</NavLink>
            </nav>
          <Switch>
            <Route exact path="/">
              <GroupsIndexContainer />
            </Route>
            <Route exact path="/groups/new" component={GroupFormContainer} />
            <Route path="/groups/:groupId/events/new" component={EventContainer} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
