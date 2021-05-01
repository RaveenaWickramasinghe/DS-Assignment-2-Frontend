import React from 'react';
import './SignUp.css';
import SignUpForm from './SignUpForm';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body mt-4">
        <div className="d-flex justify-content-center">
          <SignUpForm />   
        </div>
      </div>
    )
  }
}