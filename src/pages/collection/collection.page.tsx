import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }: any) => {
  console.log(collection);
  return (
    <div className="category-page">
      <h1>Category Page</h1>
      <div className="items">
        {collection?.items.map((item: any) => (
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
