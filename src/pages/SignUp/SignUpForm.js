import React from 'react';
import firebase from '../../firebase.config';
import Progress from '../../components/Progress';


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
  imageUrl: '',
  uploadPercentage: 0,
  formNotValid: false
}

let formData = {};

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.setUploadPercentage = this.setUploadPercentage.bind(this);
    this.setImageUrl = this.setImageUrl.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  state = initialState;

  onChange(e) {
    this.setState({ [e.targe.name]: e.targe.value });
  }

  setImage = (e) => {
    this.setState({ profileImage: e.target.files[0] });
  }

  setUploadPercentage = (progress) => {
    this.setState({ uploadPercentage: progress });
  }

  setImageUrl = (imageUrl) => {
    this.setState({ imageUrl: imageUrl });
  }

  uploadImage =(e) => {
    e.preventDefault();
    console.log('Upload button clicked')
    if (this.state.profileImage !== null) {
      console.log('inside if')
      let folderName = 'Profile-Pictures';
      let file = this.state.profileImage;
      let upload = firebase.storage().ref(`${folderName}/${this.state.email}`).put(file);

      upload.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setUploadPercentage(progress);
      }, (error) => {
        console.log(error);
      }, () => {
        upload.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          this.setImageUrl(url);
        });
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      let data = Object.values(formData).map(key => {
        return key !== null;
      });

      if (!data.includes(false)) {

      } else {
        this.setState({ formNotValid: true });
      }
    }
  }

  validateForm() {
    const data = {
      firstname: this.state.firstName && this.state.firstName.trim().length > 0 ? this.state.firstName : null,
      lastname: this.state.lastName && this.state.lastName.trim().length > 0 ? this.state.lastName : null,
      email: this.state.email && this.state.email.trim().length > 0 ? this.state.email : null,
      phonenumber: this.state.phoneNumber && this.state.phoneNumber.trim().length > 0 ? this.state.phoneNumber : null,
      address1: this.state.address_1 && this.state.address_1.trim().length > 0 ? this.state.address_1 : null,
      address2: this.state.address_2 && this.state.address_2.trim().length > 0 ? this.state.address_2 : null,
      city: this.state.city && this.state.city.trim().length > 0 ? this.state.city : null,
      postalcode: this.state.postalCode && this.state.postalCode.trim().length > 0 ? this.state.postalCode : null,
      username: this.state.userName && this.state.userName.trim().length > 0 ? this.state.userName : null,
      password1: this.state.password_1 && this.state.password_1.trim().length > 0 ? this.state.password_1 : null,
      password2: this.state.password_2 && this.state.password_2.trim().length > 0 ? this.state.password_2 : null,
      imageurl: this.state.imageUrl && this.state.imageUrl.trim().length > 0 ? this.state.imageUrl : null,
    };

    formData = Object.assign({}, data);
    return true;
  }

  render() {
    return (
      <div className="border signup-form">
        <form className="m-4">
          <h5>Create New Account</h5>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="first-name" className="form-label">First Name</label>
              <input type="text" id="first-name" className="form-control" />
              {formData.firstname===null && this.state.formNotValid ? <span className="form__help_danger">First name is required</span> : null}
            </div>
            <div className="col">
              <label htmlFor="last-name" className="form-label">Last Name</label>
              <input type="text" id="last-name" className="form-control" />
              {formData.lastname===null && this.state.formNotValid ? <span className="form__help_danger">Last name is required</span> : null}
            </div>
          </div>

          <div className="row m-0 mb-3">
            <label htmlFor="email" className="form-label p-0">Email Address</label>
            <input type="text" id="email" className="form-control" />
            {formData.email===null && this.state.formNotValid ? <span className="form__help_danger">Email is required</span> : null}
          </div>

          <div className="row m-0 mb-3">
            <label htmlFor="phone-number" className="form-label p-0">Phone Number</label>
            <input type="text" id="phone-number" className="form-control" />
            {formData.phonenumber===null && this.state.formNotValid ? <span className="form__help_danger">Phone Number is required</span> : null}
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="address-1" className="form-label">Address Line 1</label>
              <input type="text" id="address-1" className="form-control" />
              {formData.address1===null && this.state.formNotValid ? <span className="form__help_danger">Address line 1 is required</span> : null}
            </div>
            <div className="col">
              <label htmlFor="address-2" className="form-label">Address Line 2</label>
              <input type="text" id="address-2" className="form-control" />
              {formData.address2===null && this.state.formNotValid ? <span className="form__help_danger">Address line 2 is required</span> : null}
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

          <div className="mb-3">
            <label htmlFor="profile-image" className="form-label">Profile Image</label>
            <div className="input-group">
              <input type="file" className="form-control" id="profile-image" onChange={e => this.setImage(e)} />
              <button className="btn btn-outline-primary btn-sm" type="button" onClick={this.uploadImage}>UPLOAD</button>
            </div>
          </div>

          <Progress percentage={this.state.uploadPercentage} />

          <div className="float-end mb-4 mt-3">
            <button type="button" className="btn btn-outline-primary btn-pill" onClick={this.onSubmit}>CREATE MY ACCOUNT</button>
          </div>
        </form>
      </div>
    )
  }
}