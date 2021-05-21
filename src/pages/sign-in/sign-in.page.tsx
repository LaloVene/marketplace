import React from 'react';
import { IonContent, IonPage } from "@ionic/react";
import './sign-in.styles.scss';

import Header from '../../components/header/header.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInPage: React.FC<any> = () => (
  <IonPage>
    <IonContent fullscreen>
      <Header/>
      <div className="sign-in-and-sign-up">
        <SignIn />
      </div>
    </IonContent>
  </IonPage>
);

export default SignInPage;