import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjBMVB058od_yKvwgBX32N8N9EmtC337g",
  authDomain: "shopping-storage-22f5f.firebaseapp.com",
  projectId: "shopping-storage-22f5f",
  storageBucket: "shopping-storage-22f5f.appspot.com",
  messagingSenderId: "2736157645",
  appId: "1:2736157645:web:04a13bce61eedf3b384a84"
};

firebase.initializeApp(firebaseConfig);

export default firebase;