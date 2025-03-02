exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17)
    .notNullable()
    .unique()

    tbl.string('make', 128)
    .notNullable()

    tbl.string('model', 128)
    .notNullable()

    tbl.integer('mileage')
    .notNullable()
    .unsigned()

    tbl.string('title', 128)
    .default('clean')

    tbl.string('transmission', 128)
    .default('automatic')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
