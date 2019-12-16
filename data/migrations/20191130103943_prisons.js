exports.up = function(knex) {
  return knex.schema.createTable("prisons", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
    table
      .string("username")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.string("address");
    table.string("city");
    table.string("state");
    table.string("zip_code");
    table.text("prison_info");
    table.text("prison_image");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("prisons");
};
