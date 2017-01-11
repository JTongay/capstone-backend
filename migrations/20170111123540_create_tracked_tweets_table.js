
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('tracked_tweets', function(table){
    table.increments()
    table.bigInteger('tweet_id')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tracked_tweets')
};
