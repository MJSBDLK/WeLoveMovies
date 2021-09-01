exports.up = function (knex) {
  return knex.schema.createTable('movies_theaters', (table) => {
    table.boolean('is_showing');
    table.integer('theater_id').unsigned().notNullable();
    table.integer('movie_id').unsigned().notNullable();
    table
      .foreign('theater_id')
      .references('theater_id')
      .inTable('theaters')
      .onDelete('cascade');
    table
      .foreign('movie_id')
      .references('movie_id')
      .inTable('movies')
      .onDelete('cascade');
    table.primary(['theater_id', 'movie_id']);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('movies_theaters');
};

// npx knex migrate:up 20210830080746_createMoviesTheatersTable.js
// npx knex migrate:down 20210830080746_createMoviesTheatersTable.js