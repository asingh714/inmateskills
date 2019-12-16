exports.up = function(knex) {
  return knex.schema.createTable("inmates", table => {
    table.increments();

    table.string("name");

    table.date("release_date").notNullable();

    table.boolean("availability").notNullable();

    table.text("inmate_info");

    table.text("inmate_image");

    table.string("resume");

    table
      .integer("prison_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("prisons")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .string("prison_name")
      .unsigned()
      .notNullable()
      .references("name")
      .inTable("prisons")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("inmates");
};
