import { Route } from "react-router-dom";
import "./shop.styles.scss";

import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/header/header.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

const ShopPage = ({ match }: any) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <div className="shop-page">
          <h1>Shop Page</h1>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShopPage;
