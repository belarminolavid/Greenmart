var express = require('express');
var knex = require("../knexinstance");
var router = express.Router();

/* GET: Listar Categorias. */
router.get('/', function(req, res, next) {
    knex.select()
    .from("Category")
    .then((results) => {
        res.status(200).json({ resultados: results });
    }).catch((e) => next(e));
});

/* GET: Listar produtos de uma categoria. */

router.get('/:id_category', function(req, res, next) {
  knex('Product').
  where({id_category: req.params.id_category})
  .then((results) => {
      res.status(200).json({ resultados: results });
  })
  .catch((e) => next(e));
});
module.exports = router;
