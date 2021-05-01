import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">ShopaFy</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">My Account</a>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
      </div>
    )
  }
}