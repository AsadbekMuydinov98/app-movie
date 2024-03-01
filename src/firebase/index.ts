import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNZgDcdZ-ZsHYxT2FCHixm05yjiyK_uLA",
  authDomain: "mory-app.firebaseapp.com",
  projectId: "mory-app",
  storageBucket: "mory-app.appspot.com",
  messagingSenderId: "44831896635",
  appId: "1:44831896635:web:88b16aba3a2db8d4c6181e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
