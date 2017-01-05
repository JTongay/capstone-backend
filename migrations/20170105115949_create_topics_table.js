
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('topics', function(table){
    table.increments();
    table.string('title');
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.integer('genre_id').unsigned().index().references('id').inTable('genres').onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {

};
