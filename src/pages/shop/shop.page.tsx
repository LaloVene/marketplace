import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/header/header.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";
import { IonLoading } from "@ionic/react";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const ShopPage = ({ match, updateCollections }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  let unsubscribeFromSnapshot: any = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      setIsLoading(false);
    });

    return () => {
      // console.log("unsubscribe");
    };
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        {!isLoading ? (
          <div className="shop-page">
            <h1>Shop Page</h1>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverview}
            />
            <Route
              exact
              path={`${match.path}/:collectionId`}
              component={CollectionPage}
            />
          </div>
        ) : (
          <IonLoading isOpen={true} mode="ios" />
        )}
      </IonContent>
    </IonPage>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) => {
    dispatch(updateCollections(collectionsMap));
  },
});

export default connect(null, mapDispatchToProps)(ShopPage);
