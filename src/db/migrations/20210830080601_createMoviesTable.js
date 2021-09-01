
exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
      table.increments('movie_id').primary();
      table.string('title');
      table.integer('runtime_in_minutes');
      table.string('rating');
      table.text('description');
      table.string('image_url');
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};

// npx knex migrate:up 20210830080601_createMoviesTable.js
// npx knex migrate:down 20210830080601_createMoviesTable.js