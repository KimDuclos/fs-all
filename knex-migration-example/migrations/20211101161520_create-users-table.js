exports.up = function (knex) {
  // change we want to make to schema
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.text("username", 128)
        .unique()
        .notNullable();
    tbl.text("website");
  });
};

exports.down = function (knex) {
  // undoing change
  return knex.schema.dropTableIfExists("users");
};
