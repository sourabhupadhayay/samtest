
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC9bgFndsINhDWlCS3WdjPLzreloXXMb6g",
    authDomain: "bubble-app-55e11.firebaseapp.com",
    projectId: "bubble-app-55e11",
    storageBucket: "bubble-app-55e11.appspot.com",
    messagingSenderId: "573316732862",
    appId: "1:573316732862:web:e8741d02dde5cdd597cbef",
    measurementId: "G-7F31KFLH78"
})
const messaging = firebase.messaging()
