/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDlhePj8wS5tLD0MVfG9Bxr1ZAHu-4DbR8',
  authDomain: 'ezra-73d1a.firebaseapp.com',
  projectId: 'ezra-73d1a',
  storageBucket: 'ezra-73d1a.firebasestorage.app',
  messagingSenderId: '503959661131',
  appId: '1:503959661131:web:ea6c538aa844ed2744bbce',
  measurementId: 'G-SG39JMHSXB'
});

const messaging = firebase.messaging();

// Handle background messages (when browser/tab is not focused)
messaging.onBackgroundMessage(function(payload) {
  console.log('FCM background message received:', payload);
  const notification = payload.notification || payload.data || {};
  const title = notification.title || payload.data?.title || 'New Notification';
  const body = notification.body || payload.data?.body || '';
  const icon = notification.icon || '/favicon.ico';
  
  const notificationOptions = {
    body: body,
    icon: icon,
    badge: '/favicon.ico',
    vibrate: [200, 100, 200],
    data: payload.data,
    requireInteraction: false,
  };
  
  return self.registration.showNotification(title, notificationOptions);
});


