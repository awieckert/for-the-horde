import React from 'react';
import Item from '../Item/Item.js';
import firebaseRequests from '../../firebaseRequests/requests.js';
import authRequests from '../../firebaseRequests/auth.js';

import './MyStuff.css';

class MyStuff extends React.Component {
  state = {
    myStuff: [],
  };

  componentDidMount () {
    const userId = authRequests.getUid();
    firebaseRequests.getMyStuff(userId).then((stuffArray) => {
      this.setState({myStuff: stuffArray});
    }).catch((err) => {
      console.error('Could not get all the stuff: ', err);
    });
  };

  render () {
    const myItems = this.state.myStuff.map((item) => {
      return (
        <Item key={item.id} fbID={item.id} details={item} />
      );
    });
    return (
      <div className="MyStuff">
        {myItems}
      </div>
    );
  }
}

export default MyStuff;
