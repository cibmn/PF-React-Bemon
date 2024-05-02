import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAosm-O_DnulAX0Wydxxuj5HEcwRusNnE4",
  authDomain: "proyecto108-6c56d.firebaseapp.com",
  projectId: "proyecto108-6c56d",
  storageBucket: "proyecto108-6c56d.appspot.com",
  messagingSenderId: "1056239393347",
  appId: "1:1056239393347:web:c503cc3672e5a6553dd2f6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore{ app }