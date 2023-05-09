import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: " ", password: " " });
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
        </form>
      </div>
    );
  }
}
export default SignIn;
