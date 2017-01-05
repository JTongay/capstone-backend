
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('subjects', function(table){
    table.increments();
    table.string('name');
    table.decimal('score').defaultTo(0);
    table.integer('topic_id').unsigned().index().references('id').inTable('topics').onDelete('CASCADE');
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('subjects');
};
