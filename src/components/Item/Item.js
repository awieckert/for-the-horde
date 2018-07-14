import React from 'react';
import {Link} from 'react-router-dom';
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

  deleteStuff = () => {
    firebaseRequests.deleteItem(this.props.fbID).then().catch((err) => {
      console.error('Could Not delete item from firebase: ', err);
    });
    this.props.deleteMyStuff(this.props.fbID);
  }

  render () {
    const item = this.props.details;
    let buttons = '';
    if (item.uid && (item.uid === authRequests.getUid())) {
      buttons = <button className='btn btn-danger' onClick={this.deleteStuff}>Delete</button>;
    } else {
      buttons = <button className='btn btn-primary' onClick={this.addToMyStuff}>Add To My Stuff</button>;
    };

    return (
      <div className="Item">
        <Link to='/BigItem'><img src={item.itemImage} alt='Item yeah' /></Link>
        <h2>{item.itemName}</h2>
        <p>{item.itemDescription}</p>
        {buttons}
      </div>
    );
  }
}

export default Item;
