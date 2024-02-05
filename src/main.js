import './assets/main.css'

import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key:'AIzaSyDTe23ps4uHJ8fQRChwTxojC2_uUi_kEgM'
    }
})

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXQWTwQA3q7Z2xqOpFUNsFXutmulqMu-s",
  authDomain: "burrito-king.firebaseapp.com",
  projectId: "burrito-king",
  storageBucket: "burrito-king.appspot.com",
  messagingSenderId: "429781548444",
  appId: "1:429781548444:web:3012d7026ac2d2d801dc59",
  measurementId: "G-MGH93X0MGX"
};

// Initialize Firebase
app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
