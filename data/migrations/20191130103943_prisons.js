
exports.up = function(knex) {
  return knex.schema.createTable("prisons", table => {
    table.increments()
    table.string("name").notNullable().unique()
    table.string("username").notNullable().unique()
    table.string("password").notNullable()
    table.string("address")
    table.string("city")
    table.integer("zip_code")
    table.string("prison_info")
    table.string("prison_image")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("prisons")
};
