import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth } from "../../firebase/firebase.utils";

import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      securityAnswer1: "",
      securityAnswer2: "",
      securityAnswer3: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      password,
      securityAnswer1,
      securityAnswer2,
      securityAnswer3
    } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
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
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
