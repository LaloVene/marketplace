import { useEffect } from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/header/header.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";
import { IonLoading } from "@ionic/react";

const ShopPage = ({
  match,
  isCollectionFetching,
  isCollectionsLoaded,
  fetchCollectionStart,
}: any) => {
  useEffect(() => {
    fetchCollectionStart();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <div className="shop-page">
          <h1>Shop Page</h1>
          {!isCollectionFetching ? (
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverview}
            />
          ) : (
            <IonLoading isOpen={true} mode="ios" />
          )}
          {isCollectionsLoaded ? (
            <Route
              exact
              path={`${match.path}/:collectionId`}
              component={CollectionPage}
            />
          ) : (
            <IonLoading isOpen={true} mode="ios" />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionStart: () => {
    dispatch(fetchCollectionStart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
