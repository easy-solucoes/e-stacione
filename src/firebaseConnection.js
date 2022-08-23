import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAINI-KgG0KX_I4r0hC-TrmExVqT9bbM18",
  authDomain: "e-stacione-3fa6a.firebaseapp.com",
  databaseURL: "https://e-stacione-3fa6a-default-rtdb.firebaseio.com", //TODO: colocar essas credenciais na venv
  projectId: "e-stacione-3fa6a",
  storageBucket: "e-stacione-3fa6a.appspot.com",
  messagingSenderId: "1083840463102",
  appId: "1:1083840463102:web:8aa89ab858c360641025af",
  measurementId: "G-FS7L4349HG"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase;