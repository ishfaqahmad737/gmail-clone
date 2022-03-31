import { initializeApp } from 'firebase/app';
import { getFirestore}  from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCfRXTUzsF0uvaO3f837BKo9dHEWzauDTU",
    authDomain: "clone-yt-cd633.firebaseapp.com",
    projectId: "clone-yt-cd633",
    storageBucket: "clone-yt-cd633.appspot.com",
    messagingSenderId: "1032563652705",
    appId: "1:1032563652705:web:048eaf53b69b8039f2d220",
    measurementId: "G-CF4M23PHQZ"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {db};