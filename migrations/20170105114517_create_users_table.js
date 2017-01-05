
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments();
    table.string('username').notNullable().unique();
    table.specificType('password_digest', 'char(60)').notNullable();
    table.string('email').unique().notNullable();
    table.string('role').defaultTo('user');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
