import React from 'react';
import "./collection-preview.styles.scss";

import CollectionItem from '../collection-item/collection-item.component';
import { Item } from '../../entities/shop/item';

const CollectionPreview: React.FC<any> = ({title, items}) => {
  return (
      <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className="preview">
          {
            items
              .filter((item: Item, idx: number) => idx < 4)
              .map((item: Item) => (
               <CollectionItem key={item.id} {...item}></CollectionItem>
              ))
          }
        </div>
      </div>
  );
};

export default CollectionPreview;
