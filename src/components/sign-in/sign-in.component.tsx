import React, { ChangeEvent, FormEvent } from "react";
import "./sign-in.styles.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

type MyProps = {};
type MyState = {
  email: string;
  password: string;
};

class SignIn extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({email: '', password: ''})
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    this.setState({ [name]: value } as Pick<MyState, keyof MyState>);

  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
