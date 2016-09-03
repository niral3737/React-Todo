import firebase from 'firebase';

// Initialize Firebase
try{
  var config = {
    apiKey: "AIzaSyD3uAbqcnqTWjC38TX7rJ7JhbsVGaBJcTs",
    authDomain: "niraltodoapp.firebaseapp.com",
    databaseURL: "https://niraltodoapp.firebaseio.com",
    storageBucket: "niraltodoapp.appspot.com",
  };
  firebase.initializeApp(config);
}catch(e){
  console.log(e.message);
}
export var firebaseRef = firebase.database().ref();
export default firebase;
