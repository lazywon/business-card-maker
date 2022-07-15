import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initializeApp을 하게 되면 firebase.app.App이라는 인터페이스를 리턴 받음.
// const analytics = getAnalytics(app);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
