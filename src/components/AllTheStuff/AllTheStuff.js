import React from 'react';
import firebaseRequests from '../../firebaseRequests/requests.js';
import Item from '../Item/Item.js';
import './AllTheStuff.css';

class AllTheStuff extends React.Component {
  state = {
    allTheStuff: [],
  };

  componentDidMount () {
    firebaseRequests.getAllTheStuff().then((stuffArray) => {
      this.setState({allTheStuff: stuffArray});
    }).catch((err) => {
      console.error('Could not get all the stuff: ', err);
    });
  };

  render () {
    const allTheItems = this.state.allTheStuff.map((item) => {
      return (
        <Item key={item.id} fbID={item.id} details={item} />
      );
    });
    return (
      <div className="AllTheStuff">
        {allTheItems}
      </div>
    );
  }
}

export default AllTheStuff;
