import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SignUp from '../pages/SignUp/SignUpPage';

export default class PageRoutes extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router>
          <section>
            <Switch>
              <Route path="/signup" component={SignUp} exact />
            </Switch>
          </section>
        </Router>
      </div>
    )
  }
}