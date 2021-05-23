import { IonContent, IonPage } from '@ionic/react';
import './home.page.scss';

import Header from "../../components/header/header.component";


import Directory from '../../components/directory/directory.component';

const HomePage: React.FC<any> = ({currentUser}) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header currentUser={currentUser} />
        <section className="homepage">
          <Directory></Directory>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
