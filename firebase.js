const firebaseConfig = {
    apiKey: "AIzaSyC4GYt9AxpccMSBg4wX8UGZRWsSd4-64uU",
    authDomain: "rpg-demo-96d9e.firebaseapp.com",
    projectId: "rpg-demo-96d9e",
    storageBucket: "rpg-demo-96d9e.firebasestorage.app",
    messagingSenderId: "904005280478",
    appId: "1:904005280478:web:f21037d47a27270e95184f",
    measurementId: "G-4VG7542M20"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
