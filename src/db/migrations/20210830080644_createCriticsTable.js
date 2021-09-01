
exports.up = function(knex) {
  return knex.schema.createTable('critics', (table) => {
      table.increments('critic_id').primary();
      table.string('preferred_name');
      table.string('surname');
      table.string('organization_name');
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('critics');
  };
  
// npx knex migrate:up 20210830080644_createCriticsTable.js
// npx knex migrate:down 20210830080644_createCriticsTable.js