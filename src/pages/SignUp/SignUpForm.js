import React from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address_1: '',
  address_2: '',
  city: '',
  postalCode: '',
  userName: '',
  password_1: '',
  password_2: '',
  profileImage: null,
  imageUrl: ''
}

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = initialState;

  onChange(e) {
    this.setState({ [e.targe.name]: e.targe.value });
  }

  render() {
    return (
      <div>
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="first-name" className="form-label">First Name</label>
              <input type="text" id="first-name" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="last-name" className="form-label">Last Name</label>
              <input type="text" id="last-name" className="form-control" />
            </div>
          </div>

          <div class="row m-0 mb-3">
            <label htmlFor="email" className="form-label p-0">Email Address</label>
            <input type="text" id="email" className="form-control" />
          </div>

          <div class="row m-0 mb-3">
            <label htmlFor="phone-number" className="form-label p-0">Phone Number</label>
            <input type="text" id="phone-number" className="form-control" />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="address-1" className="form-label">Address Line 1</label>
              <input type="text" id="address-1" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="address-2" className="form-label">Address Line 2</label>
              <input type="text" id="address-2" className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" id="city" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="postal-code" className="form-label">Postal Code</label>
              <input type="text" id="postal-code" className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="city" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1" style={{fontSize: '13px'}}>@</span>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password-1" className="form-label">Password</label>
            <input type="password" className="form-control" id="password-1" />
          </div>

          <div className="mb-3">
            <label htmlFor="password-2" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password-2" />
          </div>

          <div class="mb-3">
            <label htmlFor="profile-image" class="form-label">Profile Image</label>
            <input class="form-control" type="file" id="profile-image" />
          </div>

          <div className="float-end">
            <button type="button" class="btn btn-outline-primary btn-pill">CREATE MY ACCOUNT</button>
          </div>
        </form>
      </div>
    )
  }
}