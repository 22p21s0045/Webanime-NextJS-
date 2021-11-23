// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDhB6U9-lJIpUX65AujUroUSpksDjFkFfE",
  authDomain: "webanime-6a0b2.firebaseapp.com",
  databaseURL: "https://webanime-6a0b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webanime-6a0b2",
  storageBucket: "webanime-6a0b2.appspot.com",
  messagingSenderId: "1090354034958",
  appId: "1:1090354034958:web:1803a3d34317be76577f5f",
  measurementId: "G-ZN1PMDPPJ3"
};
const app = initializeApp(firebaseConfig);
export const dbs = getFirestore(app);


