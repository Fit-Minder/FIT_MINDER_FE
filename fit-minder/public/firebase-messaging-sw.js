importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyB4NJgBIXe_6oKZKi5Wt5pSyt9uPnSyni8',
  authDomain: 'fitminderfcm.firebaseapp.com',
  projectId: 'fitminderfcm',
  storageBucket: 'fitminderfcm.appspot.com',
  messagingSenderId: '851446458104',
  appId: '1:851446458104:web:4238a3dec480ba25da7d0d',
  measurementId: 'G-FZW7JTWGKN',
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
