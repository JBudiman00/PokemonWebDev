// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSL-OzhXCfyMUwIZwMIE2f4KLohKZnyk4",
  authDomain: "pokemonvisual-73748.firebaseapp.com",
  databaseURL: "https://pokemonvisual-73748-default-rtdb.firebaseio.com",
  projectId: "pokemonvisual-73748",
  storageBucket: "pokemonvisual-73748.appspot.com",
  messagingSenderId: "426035349288",
  appId: "1:426035349288:web:23a8ab2280c39ce431b21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export { database };