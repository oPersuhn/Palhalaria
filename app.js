const express = require('express');
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');
const serviceAccount = require('serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/palhaapi/firestore/data/~2F'
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const produtosRoutes = require('./routes/produtosRoutes');

// Usar rotas
app.use('/api', produtosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));