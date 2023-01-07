import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0866/5968/products/NOK13895_5f6ec7fd-3407-4194-b10d-efd409986a6d_540x.jpg?v=1652815594',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'hoodie',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0866/5968/products/Ygp7XTVY_720x.jpg?v=1666981416',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'CREWNECK',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0866/5968/products/5aqPJ2MY_1080x.jpg?v=1666723306',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0866/5968/products/UwjmbFZk_1080x.jpg?v=1666751199',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0866/5968/products/11KRJFVw_1080x.jpg?v=1666743001',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;