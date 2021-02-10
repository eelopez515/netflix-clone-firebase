import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAy4U1b1_9OurGTyeYz7YfS4c87Ppv9XJw",
    authDomain: "netflix-clone-firebase-9613d.firebaseapp.com",
    projectId: "netflix-clone-firebase-9613d",
    storageBucket: "netflix-clone-firebase-9613d.appspot.com",
    messagingSenderId: "618185875236",
    appId: "1:618185875236:web:c0340eab08f96696e05db1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db