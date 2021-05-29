import React from 'react';
import { IonContent, IonPage } from "@ionic/react";
import './sign-in.styles.scss';

import Header from '../../components/header/header.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInPage: React.FC<any> = ( {currentUser} ) => (
  <IonPage>
    <IonContent fullscreen>
      <Header currentUser={currentUser} />
      <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
      </div>
    </IonContent>
  </IonPage>
);

export default SignInPage;