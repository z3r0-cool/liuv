import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ name, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{name && name.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
