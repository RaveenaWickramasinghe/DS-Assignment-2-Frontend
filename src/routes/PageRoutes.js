import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Products from '../pages/products/Products';

export default class PageRoutes extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router>
          <section>
            <Switch>
              <Route to="/" component={Products} exact/>
            </Switch>
          </section>
        </Router>
      </div>
    )
  }
}