import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

type MyProps = {
  googleSignInStart?: any;
  emailSignInStart?: any;
};
type MyState = {
  email: string;
  password: string;
};

const SignIn = ({ emailSignInStart, googleSignInStart }: MyProps) => {
  const [userCredentials, setUserCredentials] = useState<MyState>({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value } as Pick<
      MyState,
      keyof MyState
    >);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) => {
    dispatch(emailSignInStart({ email, password }));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
