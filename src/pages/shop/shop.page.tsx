import React from 'react';
import { IonContent, IonPage } from "@ionic/react";
import './shop.styles.scss';

import Header from "../../components/header/header.component";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { Collections } from '../../entities/shop/collections';
import SHOP_DATA from './shop.data';

type MyProps = {};
type MyState = { collections: Collections[] };

class ShopPage extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <IonPage>
        <IonContent fullscreen>
          <Header/>
          <div className='shop-page'>
            <h1>Shop Page</h1>
            {
              collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps}/>
              ))
            }
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default ShopPage;