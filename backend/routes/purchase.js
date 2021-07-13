var express = require("express");
var knex = require("../knexinstance");
var router = express.Router();

/* GET: Listar Produtos */
router.get("/", function (req, res, next) {
    knex.select()
        .from("Purchase")
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
    //   knex('').
    //   insert(req.body.id_user)
    //   .then((results) => {
    //     res.status(200).json({ resultados: results });
    // }).res.json({ error: err });
});

router.get("/produtos", function (req, res, next) {
    knex.select()
        .from("Purchase_Product")
        .where({id_purchase:req.body.id_purchase})
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
});
router.post("/", function (req, res, next) {
    // console.log(req.body.id_user);
    knex("Purchase")
        .insert(req.body)
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
});

router.post("/produtos", function (req, res, next) {
    knex.table("Purchase_Product")
        .insert(req.body)
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
});
module.exports = router;
