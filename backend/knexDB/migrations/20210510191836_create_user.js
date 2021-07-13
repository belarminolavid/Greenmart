
exports.up = function(knex) {
    return knex.schema
    .createTable('Category', table => {
        table.integer('id_category').notNullable().primary('id_category');
        table.string('category_name').notNullable();
    })
    .createTable('Product', table => {
        table.increments('id_product').notNullable().primary('id_product');   //increments means 'id int unsigned not null auto_increment primary key'
        table.string('product_name').notNullable();
        table.string('product_name_2').notNullable();        //default lenght of string is 255
        table.double('price',4,2).notNullable();
        table.string('iconic').notNullable();
        table.string('description').notNullable();
        table.integer('id_category');
        table.foreign('id_category').references('id_category').inTable('Category').onDelete('NO ACTION');

    })
    .createTable('User', table => {
        table.increments('id_user').notNullable().primary('id_user');   //increments means 'id int unsigned not null auto_increment primary key'
        table.string('first_name').notNullable();  
        table.string('last_name').notNullable();
        table.string('email').notNullable();    
        table.string('username').notNullable();
        table.string('password').notNullable(); 
         //default lenght of string is 255
       
    })
    .createTable('Purchase', table => {
        table.string('id_purchase').notNullable().primary('id');   //increments means 'id int unsigned not null auto_increment primary key'
        table.integer('id_user');
        table.foreign('id_user').references('id_user').inTable('User').onDelete('NO ACTION');
         //default lenght of string is 255
       
    })
    .createTable('Purchase_Product', table => {
        table.string('id_purchase');   //increments means 'id int unsigned not null auto_increment primary key'
        table.integer('id_product');
        table.foreign('id_product').references('id_product').inTable('Product').onDelete('NO ACTION');
        table.foreign('id_purchase').references('id_purchase').inTable('Purchase').onDelete('NO ACTION');

         //default lenght of string is 255
       
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('Category')
    .dropTable('Product')
    .dropTable('User')
    .dropTable('Purchase')
    .dropTable('Purchase_Product');
};
