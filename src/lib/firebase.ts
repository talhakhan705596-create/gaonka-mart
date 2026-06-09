import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// These would normally be in .env
const firebaseConfig = {
  apiKey: "AIzaSyDummyKey-1234567890",
  authDomain: "desh-gram.firebaseapp.com",
  projectId: "desh-gram",
  storageBucket: "desh-gram.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
