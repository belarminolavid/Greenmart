var express = require('express');
var knex = require("../knexinstance");
var router = express.Router();

/* GET: Listar Produtos */
router.get('/', function(req, res, next) {
  knex.select()
  .from("Product")
  .then((results) => {
      res.status(200).json({ products: results });
  })
  .catch((e) => next(e));
});

/* GET: Buscar Produto por id */
router.get('/:id_product', function(req, res, next) {
  knex('Product').
  where({id_product: req.params.id_product})
  .then((results) => {
      res.status(200).json({ resultados: results });
  })
  .catch((e) => next(e));
});

/* GET: Buscar Produto por Nome */
router.get('/:product_name/:product_name_2', function(req, res, next) {
  knex('Product').
  where({product_name: req.params.product_name
          ,product_name_2: req.params.product_name_2})
  .then((results) => {
      res.status(200).json({ resultados: results });
  })
  .catch((e) => next(e));
});


/* PUT: Atualizar produto*/

router.put("/:id_product", function (req, res, next) {
  knex('Product').
      where({id_product: req.params.id_product})
      .update(req.body)
      .then((results) => {
        res.status(200).json({ resultados: results });
    }).catch((e) => next(e));
});


/* DELETE : Remove produto por id */

router.delete("/:id_product", function (req, res, next) {
  knex('Product').
      where({id_product: req.params.id_product})
      .del()
      .then((results) => {
        res.status(200).json({ resultados: results });
    }).catch((e) => next(e));
});
module.exports = router;
