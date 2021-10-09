const firebase = require('firebase/storage')
///require('firebase/storage')

const config = {
    apiKey: "AIzaSyBd4Zeni5GgjnEpEewrSCLY31aLxrh-0mg",
    authDomain: "customs-4468c.firebaseapp.com",
    projectId: "customs-4468c",
    storageBucket: "customs-4468c.appspot.com",
    messagingSenderId: "644732511543",
    appId: "1:644732511543:web:6151184aa64e9b8cd7e6b2"
};

export const app = firebase.initializeApp(config);
