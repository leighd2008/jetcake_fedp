import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      photo: "",
      phoneNumber: "",
      address: "",
      city: "",
      addressState: "",
      zipCode: "",
      dob: "",
      securityAnswer1: "",
      securityAnswer2: "",
      securityAnswer3: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword,
      photo,
      phoneNumber,
      address,
      city,
      addressState,
      zipCode,
      dob,
      securityAnswer1,
      securityAnswer2,
      securityAnswer3
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
        photo,
        phoneNumber,
        address,
        city,
        addressState,
        zipCode,
        dob,
        securityAnswer1,
        securityAnswer2,
        securityAnswer3
      });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        photo: "",
        phoneNumber: "",
        address: "",
        city: "",
        addressState: "",
        zipCode: "",
        dob: "",
        securityAnswer1: "",
        securityAnswer2: "",
        securityAnswer3: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleInputPhone = value => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return value.replace(phoneRegex, "($1) $2-$3");
  };

  handleInputDOB = value => {
    const dobRegex = /^\(?([0-9]{2})\)?[/. ]?([0-9]{2})[/. ]?([0-9]{4})$/;

    return value.replace(dobRegex, "$1/$2/$3");
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      photo,
      phoneNumber,
      address,
      city,
      addressState,
      zipCode,
      dob,
      securityAnswer1,
      securityAnswer2,
      securityAnswer3
    } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="file"
            name="photo"
            value={photo}
            onChange={this.handleChange}
            label="Profile Picture"
            // required
          />
          {/* <FormInput
            type="text"
            maxLength={10}
            name="phoneNumber"
            value={this.handleInputPhone(phoneNumber)}
            onChange={this.handleChange}
            label="Please enter 10 digit phone number, numbers only"
            required
          /> */}
          {/* <FormInput
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            label="Street Address"
            // required
          /> */}
          {/* <FormInput
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
            label="City"
            // required
          /> */}
          {/* <FormInput
            type="text"
            name="addressState"
            value={addressState}
            onChange={this.handleChange}
            label="State"
            // required
          /> */}
          {/* <FormInput
            type="text"
            maxLength={5}
            name="zipCode"
            value={zipCode}
            onChange={this.handleChange}
            label="Please enter 5 digit zip code"
            required
          /> */}
          {/* <FormInput
            type="text"
            maxLength={8}
            name="dob"
            value={this.handleInputDOB(dob)}
            onChange={this.handleChange}
            label="Please enter Date of Birth as mmddyyyy"
            required
          /> */}
          {/* <FormInput
            type="text"
            name="securityAnswer1"
            value={securityAnswer1}
            onChange={this.handleChange}
            label="What is the name of your first pet?"
            required
          />
          <FormInput
            type="text"
            name="securityAnswer2"
            value={securityAnswer2}
            onChange={this.handleChange}
            label="What is your father's middle name?"
            required
          />
          <FormInput
            type="text"
            name="securityAnswer3"
            value={securityAnswer3}
            onChange={this.handleChange}
            label="What is your mother's maiden name?"
            required
          /> */}
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password must be atleast 6 characters long"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
