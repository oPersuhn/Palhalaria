const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\augusto_persuhn\\Documents\\palhaApi\\serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
