exports.usefirestore = async (req, res) => {
  var admin = require("firebase-admin");

  var serviceAccount = require("../appointmentscheduler-psx9-firebase-adminsdk-28am3-a96164f6a8.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


  const db = admin.firestore();
  // const docRef = db.collection('userdetails').doc('mri1');

  // await docRef.set({
  //   name: 'Ada',
  //   password: 'Lovelace',
  //   born: 1815
  // });

  // const aTuringRef = db.collection('userdetails').doc('aturing1');

  // await aTuringRef.set({
  //   'first': 'Alan',
  //   'middle': 'Mathison',
  //   'last': 'Turing',
  //   'born': 1912
  // });
  const data = {
    stringExample: 'Hello, World!',
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: admin.firestore.Timestamp.fromDate(new Date('December 10, 1815')),
    arrayExample: [5, true, 'hello'],
    nullExample: null,
    objectExample: {
      a: 5,
      b: true
    }
  };
  const FieldValue = admin.firestore.FieldValue;

  // Create a document reference
  const docRef = db.collection('data').doc('one');

  // Update the timestamp field with the value from the server
  const rest = await docRef.update({
    timestamp: FieldValue.serverTimestamp()
  });

  //const rest = await db.collection('data').doc('one').set(data);
  //const cityRef = db.collection('data').doc('one');

  // Set the 'capital' field of the city
  //const rest = await cityRef.update({ capital: "delhi" });
  const snapshot = await db.collection('data').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });

  res.send("sent to database successful");
}