import React from 'react';
import './SignUp.css';
import SignUpForm from './SignUpForm';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body p-5">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            
          </div>

          <div className="col-md-6 col-xs-12">  
            <div className="w-lg-25">
              <SignUpForm />   
            </div>
          </div>
        </div>
      </div>
    )
  }
}