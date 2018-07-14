import firebase from 'firebase';

const loginUser = (user) => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

export default {loginUser, registerUser};
