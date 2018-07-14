import React from 'react';
import './Item.css';

class Item extends React.Component {
  render () {
    const item = this.props.details;
    return (
      <div className="Item">
        <img src={item.itemImage} alt='Item yeah' />
        <h2>{item.itemName}</h2>
        <p>{item.itemDescription}</p>
        <button className='btn btn-primary'>Add To My Stuff</button>
      </div>
    );
  }
}

export default Item;
