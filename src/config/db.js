import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBlrd50EhMsRLbxTeFmrEibZa1JZN5zkfk",
  authDomain: "dparagon-e2096.firebaseapp.com",
  databaseURL: "https://dparagon-e2096.firebaseio.com",
  projectId: "dparagon-e2096",
  storageBucket: "dparagon-e2096.appspot.com",
  messagingSenderId: "1020306354923"
};

let app = Firebase.initializeApp(config)
export const db = app.database()