
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_votes', function(table){
    table.increments()
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.integer('topic_id').unsigned().index().references('id').inTable('topics').onDelete('CASCADE');
    table.integer('first_subject_id').unsigned().index().references('id').inTable('subjects').onDelete('CASCADE');
    table.integer('second_subject_id').unsigned().index().references('id').inTable('subjects').onDelete('CASCADE');
    table.integer('third_subject_id').unsigned().index().references('id').inTable('subjects').onDelete('CASCADE');
    table.integer('garbage_subject_id').unsigned().index().references('id').inTable('subjects').onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_votes');
};
