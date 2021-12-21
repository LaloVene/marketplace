import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import HomePage from "./pages/home-page/home.page";
import ShopPage from "./pages/shop/shop.page";
import SignInPage from "./pages/sign-in/sign-in.page";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";

type MyProps = any;
type MyState = {
  currentUser: any;
};

class App extends React.Component<MyProps, MyState> {
  // constructor(props: any) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // Check if aith changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: any) => {
        if (userAuth) {
          // Check user
          const userRef = await createUserProfileDocument(userAuth);

          // Save data
          userRef?.onSnapshot((snapShot) => {
            // this.setState({
            //   currentUser: {
            //     id: snapShot.id,
            //     ...snapShot.data(),
            //   }
            // });
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        } else {
          // If error display normal data
          setCurrentUser(userAuth);
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Switch>
              <Route
                exact
                path="/home"
                render={(props) => <HomePage />}
              ></Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route
                exact
                path="/shop"
                render={(props) => <ShopPage />}
              ></Route>
              <Route
                exact
                path="/sign-in"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
                }
              />
            </Switch>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
