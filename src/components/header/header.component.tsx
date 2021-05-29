import React from "react";
import { IonAvatar } from "@ionic/react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header: React.FC<any> = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
