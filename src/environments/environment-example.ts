import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const environment = {
    // production: false,
    firebase: {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    },
     apiUrl: 'https://ruam-backend.onrender.com/api'
  };

// Initialize Firebase
// const app = initializeApp(environment.firebase);
// const analytics = getAnalytics(app);