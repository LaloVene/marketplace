import { IonContent, IonPage } from "@ionic/react";

import Header from "../../components/header/header.component";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./home.styles";

const HomePage: React.FC<any> = ({ currentUser }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <HomePageContainer>
          <Directory></Directory>
        </HomePageContainer>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
