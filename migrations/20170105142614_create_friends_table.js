
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('friends', function(table){
    table.integer('user_a_id').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.integer('user_b_id').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.string('status').defaultTo('invited');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends');
};
