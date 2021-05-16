import { IonContent, IonPage } from '@ionic/react';
import './home.page.scss';

import Directory from '../../components/directory/directory.component';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <section className='homepage'>
          <Directory></Directory>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
