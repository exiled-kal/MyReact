import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBp3lF0pUw7FA6EH7BUXBalA48qELt-UtQ',
  authDomain: 'photogram-7b4af.firebaseapp.com',
  databaseURL: 'https://photogram-7b4af.firebaseio.com',
  projectId: 'photogram-7b4af',
  storageBucket: 'photogram-7b4af.appspot.com',
  messagingSenderId: '965616017770',
  appId: '1:965616017770:web:533da53b889bb87eec0513',
  measurementId: 'G-4JCG65Y5V2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};
