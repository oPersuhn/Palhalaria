const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/SaidaController');

// Rota para criar uma nova saída
router.post('/saidas', SaidaController.createSaida);

// Rota para obter todas as saídas
router.get('/saidas', SaidaController.getAllSaidas);

// Rota para obter um saída pelo ID
router.get('/saidas/:id', SaidaController.getSaidaById);

// Rota para atualizar um saída
router.put('/saidas/:id', SaidaController.updateSaida);

// Rota para deletar um saída
router.delete('/saidas/:id', SaidaController.deleteSaida);

module.exports = router;