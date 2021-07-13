var express = require('express');
var router = express.Router();
var knex = require("../knexinstance");


var categoriasRouter = require('./category');
var produtosRouter = require('./products')
var usuariosRouter = require('./users')
var comprasRouter = require('./purchase')


router.use('/categorias', categoriasRouter);
router.use('/usuarios', usuariosRouter);
router.use('/produtos', produtosRouter);
router.use('/compras', comprasRouter);


router.get("/", (req, res) => {
    res.json({ message: "Bem Vindo ao Servidor do Greenmart." });
   
});

// router.use(errorHandler);


module.exports = router;