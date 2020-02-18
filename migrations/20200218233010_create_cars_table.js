//describe the changes
exports.up = function(knex) {
  // DO NOT FORGET TO RETURN!!!
  return knex.schema.createTable("cars", tbl => {
    //adds an id column that auto increments
    tbl.increments();
    tbl.integer("VIN");

    tbl
      .string("make", 50)
      .notNullable()
      .index();

    tbl.string("model", 50).notNullable();

    tbl.float("mileage", 300);

    tbl.string("transmission", 250);

    tbl.string("status", 250);
  });
};

// how to undo the changes
exports.down = function(knex) {};
