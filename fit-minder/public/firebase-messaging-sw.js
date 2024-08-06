importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: "AIzaSyDBqTix4yMtj4_pWDDLE7ccRPCOmd1_gwA",
  authDomain: "fit-minder-8e052.firebaseapp.com",
  projectId: "fit-minder-8e052",
  storageBucket: "fit-minder-8e052.appspot.com",
  messagingSenderId: "238627606106",
  appId: "1:238627606106:web:89c9b55f4544548e905263",
  measurementId: "G-53CP6CPFNF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
