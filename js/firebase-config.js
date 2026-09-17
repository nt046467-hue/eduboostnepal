// EduBoost Nepal — Central Firebase Configuration
// Single source of truth for Firebase initialization across all pages

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCbVzplSn0UL2KRB3B45SCByJSm2FXPByw",
  authDomain: "eduboost-f611f.firebaseapp.com",
  projectId: "eduboost-f611f",
  storageBucket: "eduboost-f611f.firebasestorage.app",
  messagingSenderId: "121788124993",
  appId: "1:121788124993:web:4df0ec72b1e187e76c1bc0",
  measurementId: "G-1SDQZYXSKS",
};
window.FIREBASE_CONFIG = FIREBASE_CONFIG;

if (typeof firebase !== "undefined" && (!firebase.apps || !firebase.apps.length)) {
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
  } catch (err) {
    console.warn("EduBoost Firebase init:", err.message);
  }
}
