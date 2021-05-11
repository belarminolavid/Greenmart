
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Category').del()
    .then(function () {
      // Inserts seed entries
      return knex('Category').insert([
        {"id_category":1,"category_name":"Fuit"},
        {"id_category":2,"category_name":"Vegetables"}
      ]);
    });
};
