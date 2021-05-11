var express = require("express");
var knex = require("../knexinstance");
var router = express.Router();

/* GET: Lista usuários. */
router.get("/", function (req, res, next) {
    knex.select()
        .from("User")
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
});

/* GET: Busca por id*/
router.get("/:id_user", function (req, res, next) {
  knex('User').
      where({id_user: req.params.id_user})
      .then((results) => {
          res.status(200).json({ resultados: results });
      })
      .catch((e) => next(e));
});


/* GET: Login */

router.get("/:username/:password", function (req, res, next) {
  knex('User').
      where({username: req.params.username,
             password: req.params.password
          })
      .then((results) => {
          res.status(200).json({ resultados: results });
      })
      .catch((e) => next(e));
});

/* POST: Cadastrar */

router.post("/", function (req, res, next) {
  knex('User').
      insert(req.body)
      .then((results) => {
        res.status(200).json({ resultados: results });
    }).catch((e) => next(e));
});

/* PUT: Atualizar usuário*/

router.put("/:id_user", function (req, res, next) {
  knex('User').
      where({id_user: req.params.id_user})
      .update(req.body)
      .then((results) => {
        res.status(200).json({ resultados: results });
    }).catch((e) => next(e));
});

/* DELETE : Remove por id */

router.delete("/:id_user", function (req, res, next) {
  knex('User').
      where({id_user: req.params.id_user})
      .del()
      .then((results) => {
        res.status(200).json({ resultados: results });
    }).catch((e) => next(e));
});

module.exports = router;
