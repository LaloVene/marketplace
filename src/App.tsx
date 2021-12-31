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

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import HomePage from "./pages/home-page/home.page";
import ShopPage from "./pages/shop/shop.page";
import SignInPage from "./pages/sign-in/sign-in.page";
import CheckoutPage from "./pages/checkout/checkout.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

type MyProps = any;
type MyState = {
  currentUser: any;
};

class App extends React.Component<MyProps, MyState> {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/home" component={HomePage}></Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/shop" component={ShopPage}></Route>
              <Route exact path="/checkout" component={CheckoutPage}></Route>
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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
