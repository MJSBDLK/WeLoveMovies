exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.text('content');
    table.integer('score');
    table.integer('critic_id').unsigned().notNullable();
    table.integer('movie_id').unsigned().notNullable();
    table
      .foreign('critic_id')
      .references('critic_id')
      .inTable('critics')
      .onDelete('cascade');
    table
      .foreign('movie_id')
      .references('movie_id')
      .inTable('movies')
      .onDelete('cascade');
    table.primary(['critic_id', 'movie_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reviews');
};

// npx knex migrate:up 20210830080705_createReviewsTable.js