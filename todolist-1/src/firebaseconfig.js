// import * as firebase from 'firebase';
// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyDtrR3M7mxADUHivZJukunLV8jX_yStbl8",
//     authDomain: "todolist-1b512.firebaseapp.com",
//     databaseURL: "https://todolist-1b512.firebaseio.com",
//     projectId: "todolist-1b512",
//     storageBucket: "todolist-1b512.appspot.com",
//     messagingSenderId: "210249927506",
//     appId: "1:210249927506:web:4ad59f9f60affb034ac88b",
//     measurementId: "G-8999YP0SHT"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();



import firebase from 'firebase';
import 'firebase/firestore';

// chỗ này khai báo thông tin kết nối Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyDtrR3M7mxADUHivZJukunLV8jX_yStbl8",
    authDomain: "todolist-1b512.firebaseapp.com",
    databaseURL: "https://todolist-1b512.firebaseio.com",
    projectId: "todolist-1b512",
    storageBucket: "todolist-1b512.appspot.com",
    messagingSenderId: "210249927506",
    appId: "1:210249927506:web:4ad59f9f60affb034ac88b",
    measurementId: "G-8999YP0SHT"
};

export default class Firebase {
  static db;

  static init() {
    firebase.initializeApp(firebaseConfig);
    Firebase.db = firebase.firestore();
  }
}