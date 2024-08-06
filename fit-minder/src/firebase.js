import { initializeApp, getApps, getApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: 'AIzaSyB4NJgBIXe_6oKZKi5Wt5pSyt9uPnSyni8',
    authDomain: 'fitminderfcm.firebaseapp.com',
    projectId: 'fitminderfcm',
    storageBucket: 'fitminderfcm.appspot.com',
    messagingSenderId: '851446458104',
    appId: '1:851446458104:web:4238a3dec480ba25da7d0d',
    measurementId: 'G-FZW7JTWGKN',
  };

// Check if Firebase app is already initialized, if not initialize it
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other necessary action with the token
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
