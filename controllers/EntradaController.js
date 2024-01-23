const db = require('../firebaseConfig');

const EntradaController = {
    createEntrada: async (req, res) => {
        try {
            const produtoRef = db.collection('produtos').doc(req.params.id);
            const doc = await produtoRef.get();
            
            const entradaRef = db.collection('entradas').doc();
            await entradaRef.set(req.body);
            
            const qtd_estoque = doc.data().qtd_estoque;

            const qtd_entrada = req.body.quantidade;
            const preco = req.body.preco_unitario;
            const preco_total = (qtd_entrada*preco)
            
             // Atualizar a quantidade em estoque no Firestore
            const nova_qtd_estoque = qtd_estoque + qtd_entrada;

            // Usando update para adicionar a quantidadeEntrada à quantidadeEstoqueAtual
            await produtoRef.update({ qtd_estoque: nova_qtd_estoque });

            
            if (!doc.exists) {
                res.status(404).send('Produto não encontrado');
            } else {
                res.status(201).json({
                id_produto: doc.id,
                id_entrada: entradaRef.id,
                ...req.body,
                quantidade_estoque: nova_qtd_estoque,
                preco_total: preco_total });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllEntradas: async (req, res) => {
        try {
            const entradasSnapshot = await db.collection('entradas').get();
            const entradas = [];
            entradasSnapshot.forEach(doc => {
                entradas.push({ id_entrada: doc.id, ...doc.data() });
            });
            res.status(200).json(entradas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getEntradaById: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('Entrada não encontrada');
            } else {
                res.status(200).json({ id_entrada: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateEntrada: async (req, res) => {
        try {
            const entradaRef = db.collection('entradas').doc(req.params.id);
            await entradaRef.update(req.body);
            res.status(200).send('Entrada atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteEntrada: async (req, res) => {
        try {
            const entradaRef = db.collection('entrada').doc(req.params.id);
            await entradaRef.delete();
            res.status(200).send('Entrada deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = EntradaController;