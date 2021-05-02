import React from 'react';
import './Navbar.css'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">ShopaFy</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link waves-effect waves-light" href="#">
                  <i class="fas fa-envelope"></i>Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="#">
                  <i class="fas fa-gear"></i>Cart</a>
              </li>
              <div className="profile">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-user"></i>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                      alt=""
                      loading="lazy"
                      /> </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                  <a class="dropdown-item waves-effect waves-light" href="#">My account</a>
                  <a class="dropdown-item waves-effect waves-light" href="#">Log out</a>
                </div>
              </li>
              </div>
            </ul>
          </div>
    </nav>

  </div>    
        
         
    )
  }
}