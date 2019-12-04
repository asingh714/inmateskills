exports.up = function(knex) {
  return knex.schema.createTable("contact_info", table => {
    table.increments();

    table.string("name").notNullable();

    table.string("email").notNullable();

    table.string("phone_number").notNullable();

    table.string("job_details");

    table
      .integer("inmate_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("inmates")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("contact_info");
};
