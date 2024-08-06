import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { createRoot } from 'react-dom/client';
import {
  getMessaging,
  getToken,
  onMessage,
} from 'firebase/messaging';
import { app } from './service/initFirebase';



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope
        );

        navigator.serviceWorker.ready.then(() => {
          const messaging = getMessaging(app);

          getToken(messaging, {
            vapidKey:
              'BGr4GbsH8MB206HgLtGCkFSw0L0ZYE3Z-4KUGrYyW-PkCZHLIjU-5978gsTgr-qkDAYeu_Ue6Eh_710G7tvwu0k',
          })
            .then((currentToken) => {
              if (currentToken) {
                console.log(
                  'Token retrieved: ',
                  currentToken
                );

                // POST 요청 보내기
                fetch(
                  `https://like-fit.p-e.kr/api/v1/members/1?token=${currentToken}`,
                    {
                      method: 'POST',
                     headers: {
                      'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({}),
                   });
              } else {
                console.log(
                  'No registration token available. Request permission to generate one.'
                );
              }
            })
            .catch((err) => {
              console.log(
                'An error occurred while retrieving token. ',
                err
              );
            });

          // 메시지 수신
          onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // 여기에서 알림을 사용자 정의합니다
          });
        });
      })
      .catch((err) => {
        console.log(
          'Service Worker registration failed: ',
          err
        );
      });
  });
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
