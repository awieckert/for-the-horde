import firebase from 'firebase';
import constants from '../constants.js';

const firebaseConnect = () => {
  firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseConnect;
