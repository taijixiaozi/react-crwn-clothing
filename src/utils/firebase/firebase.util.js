import { initializeApp } from 'firebase/app';

import { getAnalytics } from "firebase/analytics";
import {
   getAuth,
   signInWithPopup,
   signInWithRedirect,
   GoogleAuthProvider
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcYLoTPXQ3wRf3nZs2hgjl8BiLqndQjpc",
  authDomain: "crown-clothing-bc94a.firebaseapp.com",
  projectId: "crown-clothing-bc94a",
  storageBucket: "crown-clothing-bc94a.appspot.com",
  messagingSenderId: "520982702854",
  appId: "1:520982702854:web:b896646ac8df05b80fcc87",
  measurementId: "G-JL398M447K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
        prompt:'select_account',
  });

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      console.log(userAuth);
  };

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);