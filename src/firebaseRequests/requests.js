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

export default {getAllTheStuff};
