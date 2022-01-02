import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { Collections } from "../../entities/shop/collections";

type MyState = { collections: Collections[] };

const CollectionsOverview = ({ collections }: MyState) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
