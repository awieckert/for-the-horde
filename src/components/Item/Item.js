import React from 'react';
import authRequests from '../../firebaseRequests/auth.js';
import firebaseRequests from '../../firebaseRequests/requests.js';
import './Item.css';

class Item extends React.Component {
  addToMyStuff = () => {
    const myItem = {...this.props.details};
    myItem.uid = authRequests.getUid();
    firebaseRequests.addMyItem(myItem).then().catch((err) => {
      console.error('Failed to add item: ', err);
    });
  };

  render () {
    const item = this.props.details;
    return (
      <div className="Item">
        <img src={item.itemImage} alt='Item yeah' />
        <h2>{item.itemName}</h2>
        <p>{item.itemDescription}</p>
        <button className='btn btn-primary' onClick={this.addToMyStuff}>Add To My Stuff</button>
      </div>
    );
  }
}

export default Item;
