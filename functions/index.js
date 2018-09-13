const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.addMessage = functions.https.onRequest((req, res) =>{
  const original = req.query.text
  return admin.database().ref('/messages').push({original: original}).then((snapshot)=>{
    return res.redirect(303, snapshot.ref.toString())
  })
})

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
  .onCreate((snapshot,context)=>{
    const original = snapshot.val()
    console.log('Uppercasing: ', context.params.pushId,original)
    const uppercase = original.toUpperCase()
    return snapshot.ref.parent.child('uppercase').set(uppercase)
  })

exports.helloWorld = functions.https.onRequest((req, res) => {
  setTimeout(() => {
    res.send("Hello from Firebase!");
  }, 1000);

 });
