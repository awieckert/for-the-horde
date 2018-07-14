import axios from 'axios';
import constants from '../constants.js';

const getAllTheStuff = () => {
  return new Promise ((resolve, reject) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/AllTheStuff.json`).then((data) => {
      const allStuffArray = [];
      if (data.data !== null) {
        Object.keys(data.data).forEach((key) => {
          data.data[key].id = key;
          allStuffArray.push(data.data[key]);
        });
      };
      resolve(allStuffArray);
    }).catch((err) => {
      reject(err);
    });
  });
};

const addMyItem = (newItem) => {
  return new Promise ((resolve, reject) => {
    axios.post(`${constants.firebaseConfig.databaseURL}/AllTheStuff.json`, newItem).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
};

export default {getAllTheStuff, addMyItem};
