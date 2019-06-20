
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', tbl =>{
      tbl.increments();
      tbl.string('name', 200).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
};
