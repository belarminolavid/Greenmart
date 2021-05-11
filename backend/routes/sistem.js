var express = require('express');
var router = express.Router();
var knex = require("../knexinstance");


var categoriasRouter = require('./category');
var produtosRouter = require('./products')
var usuariosRouter = require('./users')



router.use('/categorias', categoriasRouter);
router.use('/usuarios', usuariosRouter);
router.use('/produtos', produtosRouter);


router.get("/", (req, res) => {
    res.json({ message: "Bem Vindo ao Servidor do Greenmart." });
   
});

// router.use(errorHandler);


module.exports = router;