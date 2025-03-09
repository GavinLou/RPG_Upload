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

async function notifyUnityFirebaseReady() {
    try {
        await firebaseApp.firestore().enablePersistence(); // 確保 Firestore 可用
        console.log("Firebase 初始化完成！");

        // 確保 Unity 已加載
        if (window.unityInstance) {
            window.unityInstance.SendMessage("GameManager", "OnFirebaseInitialized", "Firebase is ready");
        } else {
            console.error("Unity 尚未初始化，無法發送 Firebase 完成訊息！");
        }
    } catch (error) {
        console.error("Firebase 初始化錯誤:", error);
    }
}

notifyUnityFirebaseReady();