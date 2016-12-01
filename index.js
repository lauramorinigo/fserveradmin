var firebase = require('firebase-admin');
var serviceAccount = require("serviceKey.json"); /*this file should be as a node module*/

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:"https://URL.firebaseio.com"
})
