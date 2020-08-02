import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'lanches',
          imageUrl: 'https://i.imgur.com/VUHRo6S.png',
          id: 1,
          linkUrl: 'menu'
        },
        {
          title: 'bebidas',
          imageUrl: 'https://i.imgur.com/feHj39N.png',
          id: 2,
          linkUrl: 'menu'
        },
        {
          title: 'entradas',
          imageUrl: 'https://i.imgur.com/6C6keDi.jpg',
          id: 3,
          linkUrl: 'menu'
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
