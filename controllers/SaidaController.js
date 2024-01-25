const db = require('../firebaseConfig');


const SaidaController = {
    createSaida: async (req, res) => {
        try {
            const produtoRef = db.collection('produtos').doc(req.params.id);
            const doc = await produtoRef.get();

            const qtd_estoque = doc.data().qtd_estoque;
            const qtd_entrada = req.body.quantidade;

            const saidaRef = db.collection('saidas').doc();
            await saidaRef.set(req.body);
            
            if (!doc.exists || qtd_estoque<qtd_entrada) {
                res.status(404).send('Saída inválida, produto não existe ou quantidade inválida.');
            } else {
                res.status(201).json({
                    id_produto: doc.id,
                    id_saida: saidaRef.id,
                    ...req.body});
                console.log(qtd_estoque)
            }
            
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllSaidas: async (req, res) => {
        try {
            const saidasSnapshot = await db.collection('saidas').get();
            const saidas = [];
            saidasSnapshot.forEach(doc => {
                saidas.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(saidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getSaidaById: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            const doc = await saidaRef.get();
            if (!doc.exists) {
                res.status(404).send('Saida não encontrado');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            await saidaRef.update(req.body);
            res.status(200).send('Saida atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saidas').doc(req.params.id);
            await saidaRef.delete();
            res.status(200).send('Saida deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = SaidaController;