import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import { Item } from "../../entities/shop/item";

const CollectionItem: React.FC<any> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchtoProps = (dispatch: any) => ({
  addItem: (item: Item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
