import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { IonLoading } from "@ionic/react";

const CollectionPage = ({ collection }: any) => {
  // if (!collection) {
  //   return <IonLoading isOpen={true} message={"Getting Data..."} mode="ios" />;
  // }
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
